import { render, screen } from '../../tests/setup';
import userEvent from '@testing-library/user-event';
import { Pagination } from './Pagination';

describe('Pagination', () => {
  it('renders pagination component', () => {
    render(
      <Pagination pageCount={10} onPageChange={() => {}} currentPage={0} />
    );

    expect(screen.getByText('Previous')).toBeInTheDocument();
    expect(screen.getByText('Next')).toBeInTheDocument();
    expect(screen.getByText('1')).toBeInTheDocument();
    expect(screen.getByText('10')).toBeInTheDocument();
  });

  it('calls onPageChange when a page is clicked', async () => {
    const handlePageChange = vi.fn();
    render(
      <Pagination
        pageCount={10}
        onPageChange={handlePageChange}
        currentPage={0}
      />
    );

    await userEvent.click(screen.getByText('2'));

    expect(handlePageChange).toHaveBeenCalledTimes(1);
    expect(handlePageChange).toHaveBeenCalledWith({ selected: 1 });
  });
});
