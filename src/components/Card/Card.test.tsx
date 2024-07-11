import {render, screen} from '@testing-library/react';
import Card from '.';
import {MemoryRouter} from 'react-router-dom';

describe('Card component', () => {
  const character = {
    name: 'Test Character',
    url: `/api/character/1`,
    birth_year: '',
    eye_color: '',
    mass: '',
    gender: '',
    hair_color: '',
    height: '',
    id: '',
    created: '',
  };

  jest.mock('react-router-dom', () => ({
    ...jest.requireActual('react-router-dom'),
    useNavigate: jest.fn(() => ({
      push: jest.fn(),
    })),
  }));

  test('renders character name correctly', () => {
    render(
      <MemoryRouter>
        <Card {...character} />
      </MemoryRouter>,
    );

    expect(screen.getByText(/Test Character/)).toBeInTheDocument();
  });

  test('renders a saber image with the correct src', () => {
    render(
      <MemoryRouter>
        <Card {...character} />
      </MemoryRouter>,
    );

    const saberImageElement = screen.getByRole('img', {name: /Explore more/i});
    expect(saberImageElement).toHaveAttribute('src', 'images/saber.png');
  });

  test('Card snapshot', () => {
    const card = render(
      <MemoryRouter>
        <Card {...character} />
      </MemoryRouter>,
    );

    expect(card).toMatchSnapshot();
  });
});
