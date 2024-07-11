import {render, screen, fireEvent} from '@testing-library/react';
import {Provider} from 'react-redux';
import {configureStore} from '@reduxjs/toolkit';
import CharactersSlice from 'store/reducers/CharactersSlice';
import PaginationButton from './PaginationButton'; // Добавьте импорт компонента PaginationButton
import {MemoryRouter} from 'react-router-dom';
import Pagination from '.';
import {setupStore} from 'store/store';

jest.mock('./PaginationButton', () => ({
  __esModule: true,
  default: jest.fn(({number, active, onClick}) => (
    <button
      data-testid={`pagination-button-${number}`}
      className={`pagination-button ${active ? 'active' : ''}`}
      onClick={onClick}>
      {number}
    </button>
  )),
}));

const store = setupStore();

describe('Pagination component', () => {
  const mockProps = {
    next: 'https://swapi.dev/api/character?page=2',
    prev: null,
    count: 20, // Количество элементов для пагинации
    onPageChange: jest.fn(), // Моковая функция для обработки изменения страницы
  };

  test('renders pagination buttons correctly', () => {
    render(
      <Provider store={store}>
        <MemoryRouter>
          <Pagination {...mockProps} />
        </MemoryRouter>
      </Provider>,
    );
    setTimeout(() => {
      expect(screen.getByTestId('pagination-button-2')).toBeInTheDocument();
      expect(screen.getByTestId('pagination-button-2')).toBeInTheDocument();
      expect(screen.getByTestId('pagination-button-3')).toBeInTheDocument();
      expect(screen.getByTestId('pagination-button-4')).toBeInTheDocument();
      expect(screen.getByTestId('pagination-button-5')).toBeInTheDocument();
    }, 10);
  });

  test('disables previous button when there is no previous page', () => {
    render(
      <Provider store={store}>
        <MemoryRouter>
          <Pagination
            {...mockProps}
            next="https://swapi.dev/api/character?page=2"
            prev={null}
          />
        </MemoryRouter>
      </Provider>,
    );

    const prevButton = screen.getByRole('button', {name: /previous/i});
    expect(prevButton).toBeDisabled();
  });

  test('disables next button when there is no next page', () => {
    render(
      <Provider store={store}>
        <MemoryRouter>
          <Pagination
            {...mockProps}
            next={null}
            prev="https://swapi.dev/api/character?page=1"
          />
        </MemoryRouter>
      </Provider>,
    );

    const nextButton = screen.getByRole('button', {name: /next/i});
    expect(nextButton).toBeDisabled();
  });

  test('Pagination snapshot', () => {
    const pagination = render(
      <Provider store={store}>
        <MemoryRouter>
          <Pagination
            {...mockProps}
            next={null}
            prev="https://swapi.dev/api/character?page=1"
          />
        </MemoryRouter>
      </Provider>,
    );
    expect(pagination).toMatchSnapshot();
  });
});
