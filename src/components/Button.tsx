import type { VariantProps } from 'class-variance-authority';
import { cva } from 'class-variance-authority';
import clsx from 'clsx';
import Link from 'next/link';
import type { AnchorHTMLAttributes } from 'react';

interface ButtonProps
  extends VariantProps<typeof ButtonClasses>,
    AnchorHTMLAttributes<HTMLAnchorElement> {
  children: React.ReactNode;
  href: string;
}

const ButtonClasses = cva('rounded-full inline-flex items-center', {
  variants: {
    variant: {
      primary: [
        'bg-primary-gradient hover:text-shadow hover:shadow-primary transition-[shadow,text-shadow]',
      ],
      secondary: [
        'text-white-200 bg-white bg-opacity-10 border border-white-100 backdrop-filter-[12px] hover:bg-opacity-20 transition-colors ease-in',
      ],
    },
    size: {
      small: 'text-xs px-3 h-7',
      medium: 'text-sm px-4 h-8',
      large: 'text-md px-6 h-12',
    },
  },
  defaultVariants: {
    variant: 'primary',
    size: 'medium',
  },
});

export const Highlight = ({
  children,
  className,
  variant,
}: {
  children: React.ReactNode;
  className?: string;
  variant?: 'primary' | 'secondary';
}) => (
  <span
    className={clsx(
      variant === 'primary' ? 'highlight-primary' : 'highlight-secondary',
      className
    )}
  >
    {children}
  </span>
);

export const Button = ({
  children,
  href,
  variant,
  size,
  ...props
}: ButtonProps) => {
  const classes = ButtonClasses({ variant, size, className: props.className });
  return (
    <Link {...props} className={classes} href={href}>
      {children}
    </Link>
  );
};
