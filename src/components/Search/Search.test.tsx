import {render, screen, fireEvent} from '@testing-library/react';
import Search from '.';

describe('Search component', () => {
  const mockOnChange = jest.fn();

  test('renders search input correctly', () => {
    render(<Search onChange={mockOnChange} value="" />);
    setTimeout(() => {
      expect(screen.getByRole('textbox')).toBeInTheDocument();
      expect(screen.getByLabelText('Search characters')).toBeInTheDocument();
    }, 10);
  });

  test('calls onChange when input value changes', () => {
    render(<Search onChange={mockOnChange} value="" />);
    const inputElement = screen.getByRole('textbox');
    setTimeout(() => {
      fireEvent.change(inputElement, {target: {value: 'Rick'}});
      expect(mockOnChange).toHaveBeenCalledWith({target: {value: 'Rick'}});
    }, 10);
  });

  test('Search snapshot', () => {
    const search = render(<Search onChange={mockOnChange} value="" />);
    expect(search).toMatchSnapshot();
  });
});
