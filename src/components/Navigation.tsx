'use client';

import clsx from 'clsx';
import { useEffect, useState } from 'react';

import { AuthButtons } from './AuthButtons';
import { HamburgerButton } from './HamburgerButton';
import { NavLinks } from './NavLinks';

export const Navigation = () => {
  const [hamburgerMenuIsOpen, setHamburgerMenuIsOpen] = useState(false);

  useEffect(() => {
    const html = document.querySelector('html');
    if (html) html.classList.toggle('overflow-hidden', hamburgerMenuIsOpen);
  }, [hamburgerMenuIsOpen]);

  useEffect(() => {
    const closeHamburgerMenu = () => setHamburgerMenuIsOpen(false);
    window.addEventListener('orientationchange', closeHamburgerMenu);
    window.addEventListener('resize', closeHamburgerMenu);

    return () => {
      window.removeEventListener('orientationchange', closeHamburgerMenu);
      window.removeEventListener('resize', closeHamburgerMenu);
    };
  }, [setHamburgerMenuIsOpen]);

  const handleHamburgerClick = () =>
    setHamburgerMenuIsOpen(!hamburgerMenuIsOpen);

  return (
    <>
      <div
        className={clsx(
          'transition-[visibility] md:visible',
          hamburgerMenuIsOpen ? 'visible' : 'invisible delay-500'
        )}
      >
        <nav
          className={clsx(
            'navigation',
            hamburgerMenuIsOpen
              ? 'translate-x-0 opacity-100'
              : 'translate-x-[-100vw] opacity-0'
          )}
        >
          <NavLinks hamburgerMenuIsOpen={hamburgerMenuIsOpen} />
        </nav>
      </div>
      <AuthButtons />
      <HamburgerButton handleClick={handleHamburgerClick} />
    </>
  );
};
