'use client';

import { Input } from '@/app/_components/base';
import { ProfileSection } from '@/app/_components/widgets';
import { FiSearch } from 'react-icons/fi';
import { useEffect, useState } from 'react';
import clsx from 'clsx';


export const AdminHeader = () => {
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
  return (
    <header
      className={clsx(
        'sticky top-20 z-40 col-start-3 col-end-13 row-start-1 grid grid-cols-12 grid-rows-2 items-center gap-4 py-1 ps-2 sm:top-0 sm:pt-4 lg:top-0 lg:col-start-4 xl:gap-12',
        {
          'bg-coffee-690': scrolled,
        },
      )}
    >
      <div className="col-span-6 xl:col-span-4">
        <h1
          className={`font-dancing text-xl font-bold capitalize text-coffee-360 smmobile:text-2xl  sm:text-3xl lg:text-4xl `}
        >
          brewmaster&apos;s hub
        </h1>
        <h2 className="hidden text-sm font-bold capitalize text-coffee-360 sm:block lg:text-lg">
          crafting success, one sip at a time
        </h2>
      </div>
      <Input
        type="text"
        placeholder="discover the essence of your data brew"
        tailwind="col-span-full order-last xl:order-none xl:col-span-4 pe-4"
        component={<FiSearch />}
      ></Input>
      <ProfileSection />
    </header>
  );
};
