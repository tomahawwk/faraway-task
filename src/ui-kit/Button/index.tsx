import {FC} from 'react';
import {IButton} from './types';

const Button: FC<IButton> = ({children, secondary, onClick, disabled}) => {
  return (
    <button
      disabled={disabled}
      className="bg-secondary-main text-white whitespace-nowrap pb-[6px] pt-[7px] duration-300
      px-xs rounded-xs uppercase font-medium tracking-wider text-[13px] hover:bg-grey"
      onClick={onClick}>
      {children}
    </button>
  );
};

export default Button;
