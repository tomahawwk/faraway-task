import Skeleton from 'react-loading-skeleton';

const SkeletonCard = ({...props}) => {
  return (
    <div className="skeleton-card h-[250px] p-sm">
      <Skeleton
        count={6}
        {...props}
        baseColor="#0a0a0a"
        highlightColor="#141414"
      />
    </div>
  );
};

export default SkeletonCard;
