import {render, screen} from '@testing-library/react';

import Filters from '.';
import {setupStore} from 'store/store';
import {Provider} from 'react-redux';

const store = setupStore();

describe('Filters component', () => {
  test('renders Filters component', () => {
    render(
      <Provider store={store}>
        <Filters />
      </Provider>,
    );
    const titleElement = screen.getByText('Search characters');
    expect(titleElement).toBeInTheDocument();
  });

  test('Filters snapshot', () => {
    const filters = render(
      <Provider store={store}>
        <Filters />
      </Provider>,
    );

    expect(filters).toMatchSnapshot();
  });
});
