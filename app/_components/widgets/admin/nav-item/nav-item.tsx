import { AdminNavItemProps } from '@/app/_types/types';
import { Route } from 'next';
import Link from 'next/link';

const AdminNavItem = ({
  component,
  active,
  children,
  href,
  tailwind,
}: AdminNavItemProps) => {
  return (
    <Link
      href={href as Route}
      className={`${
        active
          ? 'cursor-default  text-coffee-370 sm:bg-coffee-370 sm:text-coffee-80'
          : 'bg-transparent  text-coffee-600 hover:text-coffee-370 sm:text-coffee-370 '
      } flex flex-col items-center gap-2 rounded-xl text-sm font-bold transition-all sm:flex-row sm:p-4 sm:text-4xl lg:w-4/5 lg:text-xl 2xl:w-52  ${tailwind} `}
    >
      <span className="text-2xl">{component}</span>
      <span
        className={`${
          active
            ? ' -bottom-4 border-b  border-b-coffee-370 sm:static sm:hidden lg:inline'
            : 'hidden lg:inline'
        } `}
      >
        {children}
      </span>
    </Link>
  );
};

export default AdminNavItem;
