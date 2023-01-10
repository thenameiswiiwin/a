import { HamburgerIcon } from '@components/icons/hamburger';
import type { MouseEventHandler } from 'react';

interface HamburgerButtonProps {
  handleClick: MouseEventHandler<HTMLButtonElement> | undefined;
}

export const HamburgerButton = ({ handleClick }: HamburgerButtonProps) => {
  return (
    <button className="ml-6 md:hidden" onClick={handleClick}>
      <span className="sr-only">Toggle menu</span>
      <HamburgerIcon />
    </button>
  );
};
