'use client';
import { NavIconsMenu, NavMenu } from '@/app/_components/layout';
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

  const style = clsx('header bg-coffee-690 md:bg-transparent', {
    'md:bg-coffee-690': scrolled,
  });

  return (
    <header className={style}>
      <Logo className="logo" />
      <Link href={DASHBOARD} className={manageBtnStyle}>
        <Button mode="secondary" label="manage" />
      </Link>
      <NavIconsMenu />
      <NavMenu />
    </header>
  );
};
