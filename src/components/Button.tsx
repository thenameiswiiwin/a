import type { VariantProps } from 'class-variance-authority';
import { cva } from 'class-variance-authority';
import Link from 'next/link';
import type { AnchorHTMLAttributes } from 'react';

const ButtonClasses = cva('rounded-full inline-flex items-center', {
  variants: {
    variant: {
      primary: 'bg-primary-gradient hover:text-shadow hover:box-shadow-primary',
      secondary: '',
      tertiary: '',
    },
    size: {
      small: 'text-xs px-3 h-7',
      medium: 'text-sm px-4 h-8',
      large: 'text-md px-6 px-12',
    },
  },
  defaultVariants: {
    variant: 'primary',
    size: 'medium',
  },
});

interface ButtonProps
  extends VariantProps<typeof ButtonClasses>,
    AnchorHTMLAttributes<HTMLAnchorElement> {
  href: string;
  children: React.ReactNode;
}

export const Button = ({ href, children, variant }: ButtonProps) => {
  return (
    <Link href={href} className={ButtonClasses({ variant })}>
      {children}
    </Link>
  );
};
