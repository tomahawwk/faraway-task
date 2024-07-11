import {render, screen} from '@testing-library/react';
import Header from '.';
import {MemoryRouter} from 'react-router-dom';

describe('Header component', () => {
  jest.mock('react-router-dom', () => ({
    ...jest.requireActual('react-router-dom'),
    useNavigate: jest.fn(() => ({
      push: jest.fn(),
    })),
  }));

  test('renders logo image', () => {
    render(
      <MemoryRouter>
        <Header />
      </MemoryRouter>,
    );
    const logoImage = screen.getByRole('img', {name: /logo/});
    expect(logoImage).toBeInTheDocument();
  });

  test('Header snapshot', () => {
    const header = render(
      <MemoryRouter>
        <Header />
      </MemoryRouter>,
    );

    expect(header).toMatchSnapshot();
  });
});
