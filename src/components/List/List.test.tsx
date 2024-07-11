import {render} from '@testing-library/react';
import List from '.';

describe('List component', () => {
  test('List snapshot', () => {
    const list = render(<List />);

    expect(list).toMatchSnapshot();
  });
});
