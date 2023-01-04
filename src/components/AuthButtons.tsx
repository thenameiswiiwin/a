import Link from 'next/link';

import { Button } from './Button';

export const AuthButtons = () => {
  return (
    <div className="ml-auto flex h-full items-center">
      <Link href="/login" className="mr-6 text-sm">
        Log in
      </Link>
      <Button href="/signup" variant="primary">
        Signup
      </Button>
    </div>
  );
};
