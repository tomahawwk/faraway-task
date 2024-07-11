import {render, screen, fireEvent} from '@testing-library/react';
import CharacterProperty, {ICharacterProperty} from '.';

describe('CharacterProperty component', () => {
  const mockOnChange = jest.fn();
  const props: ICharacterProperty = {
    onChange: mockOnChange,
    property: 'property',
    delay: 2,
    title: 'Name',
  };

  test('renders property correctly', () => {
    render(<CharacterProperty {...props} />);
    const titleElement = screen.getByText('Name:');
    expect(titleElement).toBeInTheDocument();
  });

  test('calls onChange handler when EditablePart changes', async () => {
    render(<CharacterProperty {...props} />);
    const editablePartElement = screen.getByText('Name:');
    fireEvent.focus(editablePartElement);
    await fireEvent.keyUp(editablePartElement, {
      key: 'Enter',
      target: {innerText: 'New Value'},
    });
    setTimeout(() => {
      screen.findByText('New Value');
      expect(mockOnChange).toHaveBeenCalledWith({
        target: {innerText: 'New Value'},
      });
    }, 0);
  });

  test('CharacterProperty snapshot', () => {
    const characterProperty = render(<CharacterProperty {...props} />);

    expect(characterProperty).toMatchSnapshot();
  });
});
