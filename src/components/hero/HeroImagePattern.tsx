import clsx from 'clsx';

export const HeroImagePattern = ({ inView }: { inView: boolean }) => {
  return (
    <svg
      className={clsx(
        'absolute left-0 top-0 h-full w-full',
        '[&_path]:stroke-white [&_path]:[strokeOpacity:0.2] [&_path]:[stroke-dasharray:1] [&_path]:[stroke-dashoffset:1]',
        inView && '[&_path]:animate-sketch-lines'
      )}
      width="100%"
      viewBox="0 0 1499 778"
      fill="none"
    >
      <path pathLength="1" d="M1500 72L220 72"></path>
      <path pathLength="1" d="M1500 128L220 128"></path>
      <path pathLength="1" d="M1500 189L220 189"></path>
      <path pathLength="1" d="M220 777L220 1"></path>
      <path pathLength="1" d="M538 777L538 128"></path>
    </svg>
  );
};
