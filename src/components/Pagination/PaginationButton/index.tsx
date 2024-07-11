import {FC} from 'react';

interface IPaginationButton {
  active: boolean;
  number: number;
  onClick(): void;
}

const PaginationButton: FC<IPaginationButton> = ({active, number, onClick}) => {
  return (
    <button
      className={`hidden md:block rounded-xs px-xs py-[5px] text-[14px] duration-300 will-change-transform
        ${
          active
            ? 'bg-grey pointer-events-none'
            : 'bg-secondary-dark hover:bg-secondary-main hover:scale-[1.1]'
        }
        `}
      onClick={onClick}>
      {number}
    </button>
  );
};

export default PaginationButton;
