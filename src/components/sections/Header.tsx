import { Container } from '@components/Container';
import { NavBar } from '@components/nav/NavBar';
import { Logo } from '@components/svg/icons/logo';
import Link from 'next/link';

export const Header = () => {
  return (
    <header className="fixed top-0 left-0 z-10 w-full border-b border-white-100 backdrop-blur-[12px]">
      <Container className="flex h-nav-height">
        <Link className="flex items-center text-md" href="/">
          <Logo className="mr-4 h-[1.8rem] w-[1.8rem]" /> Linear
        </Link>
        <NavBar />
      </Container>
    </header>
  );
};
