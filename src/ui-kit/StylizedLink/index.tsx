import {FC} from 'react';
import {ILink} from './types';
import AnimatedWord from '../AnimatedWord';

const StylizedLink: FC<ILink> = ({title, url}) => {
  return (
    <a href={url} target="_blank" className="text-[14px] md:text-[16px]">
      <AnimatedWord text={title} />
    </a>
  );
};

export default StylizedLink;
