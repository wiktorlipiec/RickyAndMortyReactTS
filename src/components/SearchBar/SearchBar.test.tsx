import { render, screen, waitFor } from '../../tests/setup';
import { SearchBar } from './SearchBar';
import userEvent from '@testing-library/user-event';

describe('SearchBar', () => {
  it('renders search bar', () => {
    const onChange = vi.fn();
    render(<SearchBar onSearch={onChange} />);

    expect(
      screen.getByPlaceholderText('Search characters')
    ).toBeInTheDocument();
  });

  it('calls onChange callback', async () => {
    const onChange = vi.fn();
    render(<SearchBar onSearch={onChange} />);

    const input = screen.getByPlaceholderText('Search characters');
    userEvent.type(input, 'Rick');

    await waitFor(() => {
      expect(onChange).toHaveBeenCalledTimes(4);
    });
  });
});
