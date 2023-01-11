import { NavLinks as Links } from '@lib/data';
import clsx from 'clsx';
import Link from 'next/link';

interface NavLinksProps {
  hamburgerMenuIsOpen: boolean;
}

export const NavLinks = ({ hamburgerMenuIsOpen }: NavLinksProps) => {
  return (
    <ul className="flex h-full flex-col ease-in md:flex-row md:items-center">
      {Links.map((link) => (
        <li
          key={link.label}
          className={clsx(
            'ml-6 border-b border-gray-100 md:border-none',
            link.className
          )}
        >
          <Link
            href={link.href}
            className={clsx(
              'flex h-nav-height w-full translate-y-8 items-center text-lg transition-[color,transform] duration-300 hover:text-gray md:translate-y-0 md:text-sm md:transition-colors',
              hamburgerMenuIsOpen && 'translate-y-0'
            )}
          >
            {link.label}
          </Link>
        </li>
      ))}
    </ul>
  );
};
