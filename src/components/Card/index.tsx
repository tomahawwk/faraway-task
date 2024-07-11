import {FC} from 'react';
import {ICharacter} from '../../store/models/ICharacter';
import {Link} from 'react-router-dom';
import LazyImage from 'ui-kit/LazyImage';

const Card: FC<ICharacter> = ({name, url}) => {
  return (
    <Link
      to={url.match(/\/(\d+)\/$/)?.[1] || ''}
      className="p-sm grid w-full h-[250px] gap-sm rounded-sm bg-secondary-dark duration-300
      group hover:scale-[1.04] hover:bg-secondary-main">
      <div className="flex flex-col gap-xs will-change-transform justify-between">
        <div className="flex items-center gap-xs">
          <div className="w-[40px] h-[40px] rounded-full bg-grey relative">
            <LazyImage
              src="images/user.png"
              className="absolute top-0 bottom-0 left-0 right-0 m-auto w-[24px]"
            />
          </div>
          <div className="text-[20px] font-medium leading-6 line-clamp-1">
            {name}
          </div>
        </div>
        <div className="flex pb-xs relative">
          <div>
            <img
              src="images/saber.png"
              alt="Explore more"
              className="w-[50px] opacity-50 duration-300 group-hover:opacity-100 will-change-transform"
            />
            <span
              className="absolute left-[50px] top-[2px] h-[4px] w-[100px] bg-primary-main rounded-[4px]
              origin-left scale-x-0 duration-300 group-hover:scale-x-100"
            />
          </div>
        </div>
      </div>
    </Link>
  );
};

export default Card;
