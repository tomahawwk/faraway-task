import {useState, FC, useEffect} from 'react';
import {useAppDispatch, useAppSelector} from 'store/hooks/redux';
import {
  getCharactersSelector,
  setCurrentPageIndex,
} from 'store/reducers/CharactersSlice';
import PaginationButton from './PaginationButton';

interface PaginationProps {
  next: string | null;
  prev: string | null;
  count: number;
  onPageChange: (pageIndex: number) => void;
}

const Pagination: FC<PaginationProps> = ({next, prev, count, onPageChange}) => {
  const {currentPageIndex} = useAppSelector(getCharactersSelector);
  const [currentPage, setCurrentPage] = useState<number>(currentPageIndex);
  const dispatch = useAppDispatch();
  const totalPages = Math.ceil(count / 10);

  useEffect(() => {
    if (next) {
      const match = next.match(/page=(\d+)/);
      if (match) {
        setCurrentPage(parseInt(match[1], 10) - 1);
        dispatch(setCurrentPageIndex(parseInt(match[1], 10) - 1));
      }
    } else if (prev) {
      const match = prev.match(/page=(\d+)/);
      if (match) {
        setCurrentPage(parseInt(match[1], 10) + 1);
        dispatch(setCurrentPageIndex(parseInt(match[1], 10) + 1));
      }
    }
  }, [next, prev]);

  const handlePageChange = (pageIndex: number) => {
    setCurrentPage(pageIndex);
    onPageChange(pageIndex);
    dispatch(setCurrentPageIndex(pageIndex));
  };

  const renderPageButtons = () => {
    const maxButtons = 5;
    const visiblePages = [];

    let startPage = Math.max(1, currentPage - Math.floor(maxButtons / 2));
    let endPage = Math.min(
      totalPages,
      currentPage + Math.floor(maxButtons / 2),
    );

    if (endPage - startPage + 1 > maxButtons) {
      if (currentPage > Math.floor(maxButtons / 2)) {
        startPage = currentPage - Math.floor(maxButtons / 2) + 1;
        endPage = startPage + maxButtons - 1;
      } else {
        endPage = Math.min(totalPages, maxButtons);
        startPage = 1;
      }
    }

    visiblePages.push(
      <PaginationButton
        key={1}
        active={1 === currentPage}
        number={1}
        onClick={() => handlePageChange(1)}
      />,
    );

    if (startPage > 2) {
      visiblePages.push(
        <span key="dots1" className="px-xs ml-1 hidden md:block">
          ...
        </span>,
      );
    }

    for (let i = startPage; i <= endPage; i++) {
      if (i !== 1 && i !== totalPages) {
        visiblePages.push(
          <PaginationButton
            key={i}
            active={i === currentPage}
            number={i}
            onClick={() => handlePageChange(i)}
          />,
        );
      }
    }

    if (endPage < totalPages - 1) {
      visiblePages.push(
        <span key="dots2" className="px-xs hidden md:block">
          ...
        </span>,
      );
    }

    visiblePages.push(
      <PaginationButton
        key={totalPages}
        active={totalPages === currentPage}
        number={totalPages}
        onClick={() => handlePageChange(totalPages)}
      />,
    );

    return visiblePages;
  };

  return (
    <div className="flex justify-center items-center gap-[6px]">
      <button
        className="w-[30px]"
        disabled={!prev}
        onClick={() => handlePageChange(currentPage - 1)}>
        <img src="images/prev-arrow.svg" className="w-full" alt="previous" />
      </button>
      {renderPageButtons()}
      <button
        className="w-[30px]"
        disabled={!next}
        onClick={() => handlePageChange(currentPage + 1)}>
        <img src="images/next-arrow.svg" className="w-full" alt="next" />
      </button>
    </div>
  );
};

export default Pagination;
