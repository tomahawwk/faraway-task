import StylizedLink from '../../ui-kit/StylizedLink';

const Navigation = () => {
  return (
    <nav className="gap-md items-center lg:flex hidden">
      <div className="animation-fade-y animation-delay-1">
        <StylizedLink
          url="https://github.com/tomahawwk/faraway-task"
          title="Task_Github"
        />
      </div>
      <div className="animation-fade-y animation-delay-2">
        <StylizedLink
          url="https://www.linkedin.com/in/egor-stulenkov-29867523a/"
          title="LinkedIn"
        />
      </div>
      <div className="animation-fade-y animation-delay-3">
        <StylizedLink url="https://t.me/tom_ahawk" title="Telegram" />
      </div>
    </nav>
  );
};

export default Navigation;
