import { HOME } from '@/app/_config/routes';
import Link from 'next/link';

export const BrandName = () => {
  return (
    <Link
      className="col-start-4 whitespace-nowrap font-dancing  text-2xl text-coffee-70 md:hidden"
      href={HOME}
    >
      Eliza Coffee
    </Link>
  );
};
