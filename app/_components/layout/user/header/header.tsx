'use client';
import { NavButton, NavIconsMenu, NavMenu } from '@/app/_components/layout';
import { Button, Logo } from '@/app/_components/base';
import { useEffect, useState } from 'react';
import clsx from 'clsx';
import { DASHBOARD } from '@/app/_config/routes';
import Link from 'next/link';
import { useUser } from '@clerk/nextjs';

export const UserHeader = () => {
  const { user } = useUser();
  // If the user does not have the admin role, hide the management button
  const manageBtnStyle = clsx(
    user?.publicMetadata.role !== 'admin' && 'hidden',
    'col-start-4 self-center md:col-start-3 lg:col-start-auto',
  );

  const [scrolled, setScrolled] = useState(false);
  const [navbar, setNavbar] = useState(false);
  const handleScroll = () => {
    if (window.scrollY > 1) setScrolled(true);
    else setScrolled(false);
  };

  useEffect(() => {
    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  const style = clsx('header bg-coffee-410 md:bg-transparent', {
    'md:bg-coffee-690': scrolled,
  });

  return (
    <header className={style}>
      <Logo className="logo" />
      <Link href={DASHBOARD} className={manageBtnStyle}>
        <Button mode="secondary" label="manage" />
      </Link>
      <NavIconsMenu navbar={navbar} setNavbar={setNavbar} />
      <NavMenu />
      <div
        className={`col-span-full md:mt-0 md:hidden md:pb-0 ${
          navbar ? 'block md:p-0' : 'hidden'
        }`}
      >
        <div className="h-screen w-full items-center justify-center md:flex md:h-auto ">
          <span className="block w-full" onClick={() => setNavbar(!navbar)}>
            <NavButton title="home" />
          </span>
          <span className="" onClick={() => setNavbar(!navbar)}>
            <NavButton title="menu" />
          </span>
          <span className="" onClick={() => setNavbar(!navbar)}>
            <NavButton title="services" />
          </span>
          <span className="" onClick={() => setNavbar(!navbar)}>
            <NavButton title="products" />
          </span>
          <span className="" onClick={() => setNavbar(!navbar)}>
            <NavButton title="blog" />
          </span>
          <span className="" onClick={() => setNavbar(!navbar)}>
            <NavButton title="contact" />
          </span>
        </div>
      </div>
    </header>
  );
};
