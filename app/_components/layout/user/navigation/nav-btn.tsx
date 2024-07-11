import { Route } from 'next';
import Link from 'next/link';

type NavButtonProps = {
  title: string;
  active?: boolean;
};
export const NavButton = ({ title }: NavButtonProps) => {
  const navLink =
    title === 'home' ? '/' : title === 'products' ? '/products' : '#';
  return (
    <Link
      href={navLink as Route}
      className="flex h-20 w-full items-end justify-center py-5 pe-2 ps-1 font-dancing text-5xl capitalize text-coffee-10 backdrop-blur-sm transition-colors delay-150 duration-300 ease-in-out hover:bg-[linear-gradient(94deg,_rgba(223,195,157,0.40)_-9.94%,_rgba(248,228,190,0.40)_19.83%,_rgba(223,195,157,0.40)_50.71%,_rgba(248,228,190,0.40)_81.26%,_rgba(248,228,190,0.40)_111.66%)] md:rounded-b-3xl md:font-slab md:text-xl lg:px-3"
    >
      {title}
    </Link>
  );
};
