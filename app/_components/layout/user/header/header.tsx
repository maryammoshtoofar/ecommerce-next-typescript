'use client';
import { NavIconsMenu, NavMenu } from '@/app/_components/layout';

import { Logo } from '@/app/_components/base';
import { useEffect, useState } from 'react';
import clsx from 'clsx';

export const UserHeader = () => {
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
      <NavIconsMenu />
      <NavMenu />
    </header>
  );
};
