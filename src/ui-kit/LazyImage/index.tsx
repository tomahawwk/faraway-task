import {FC} from 'react';
import {ILazyImage} from './types';
import {LazyLoadImage} from 'react-lazy-load-image-component';

const LazyImage: FC<ILazyImage> = ({className, src, width, height, alt}) => {
  return (
    <LazyLoadImage
      effect="blur"
      delayTime={600}
      delayMethod="debounce"
      className={className}
      src={src}
      alt={alt}
      width={width}
      height={height}
    />
  );
};

export default LazyImage;
