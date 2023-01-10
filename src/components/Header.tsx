import Link from 'next/link';

import { Container } from './Container';
import { Logo } from './icons/logo';
import { Navigation } from './Navigation';

export const Header = () => {
  return (
    <header className="fixed top-0 left-0 z-10 w-full border-b border-white-100 backdrop-blur-[12px]">
      <Container className="flex h-nav-height">
        <Link className="flex items-center text-md" href="/">
          <Logo className="mr-4 h-[1.8rem] w-[1.8rem]" /> Linear
        </Link>
        <Navigation />
      </Container>
    </header>
  );
};
