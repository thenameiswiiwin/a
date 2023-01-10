import { FooterLinks as Links } from '@lib/data';
import Link from 'next/link';

interface LinkProps {
  title: string;
  links: {
    href: string;
    label: string;
  }[];
}

export const FooterLinks = () => {
  return (
    <div className="flex flex-wrap">
      {Links.map((column: LinkProps) => (
        <div
          key={column.title}
          className="mt-10 min-w-[50%] lg:mt-0 lg:min-w-[18rem]"
        >
          <h3 className="mb-3 font-medium">{column.title}</h3>
          <ul>
            {column.links.map((link) => (
              <li key={link.label} className="[&_a]:last:mb-0">
                <Link
                  href={link.href}
                  className="mb-3 block text-gray transition-colors hover:text-white-200"
                >
                  {link.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>
      ))}
    </div>
  );
};
