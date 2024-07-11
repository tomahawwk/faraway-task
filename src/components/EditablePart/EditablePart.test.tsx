import {render, screen, fireEvent} from '@testing-library/react';
import EditablePart, {IEditable} from '.';

describe('EditablePart component', () => {
  const mockOnChange = jest.fn();
  const props: IEditable = {
    onChange: mockOnChange,
    property: 'Name',
  };

  test('renders property title and value correctly', () => {
    render(<EditablePart {...props} />);
    const titleElement = screen.getByText('Name');
    expect(titleElement).toBeInTheDocument();
  });

  test('EditablePart snapshot', () => {
    const editablePart = render(<EditablePart {...props} />);

    expect(editablePart).toMatchSnapshot();
  });
});
