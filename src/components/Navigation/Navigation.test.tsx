import {render} from '@testing-library/react';
import Navigation from '.';

describe('Navigation component', () => {
  test('Navigation snapshot', () => {
    const nav = render(<Navigation />);
    expect(nav).toMatchSnapshot();
  });
});
