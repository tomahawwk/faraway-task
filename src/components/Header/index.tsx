import StylizedLink from 'ui-kit/StylizedLink';
import Navigation from '../Navigation';
import {Link} from 'react-router-dom';

const Header = () => {
  return (
    <div className="flex justify-between w-full items-center py-sm md:py-md">
      <div className="flex items-center gap-lg">
        <Link to="/">
          <img
            src="/images/logo.png"
            alt="logo"
            className="w-[35px] h-[35px] md:w-[60px] md:h-[60px] animation-logo"
          />
        </Link>
        <Navigation />
      </div>
      <div className="animation-fade-y animation-delay-1 md:animation-delay-4">
        <StylizedLink url="/egor-cv.pdf" title="Look_at_my_CV" />
      </div>
    </div>
  );
};

export default Header;
