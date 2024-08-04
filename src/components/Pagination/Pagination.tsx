import ReactPaginate from 'react-paginate';
import { PaginationWrapper } from './Pagination.style';

interface IPaginationProps {
  pageCount: number;
  onPageChange: (selectedItem: { selected: number }) => void;
  currentPage: number;
}

export const Pagination: React.FC<IPaginationProps> = ({
  pageCount,
  onPageChange,
  currentPage,
}) => {
  return (
    <PaginationWrapper>
      <ReactPaginate
        previousLabel={'Previous'}
        nextLabel={'Next'}
        breakLabel={'...'}
        pageCount={pageCount}
        marginPagesDisplayed={2}
        pageRangeDisplayed={3}
        onPageChange={onPageChange}
        containerClassName={'pagination'}
        activeClassName={'selected'}
        disabledClassName={'disabled'}
        forcePage={currentPage}
      />
    </PaginationWrapper>
  );
};
