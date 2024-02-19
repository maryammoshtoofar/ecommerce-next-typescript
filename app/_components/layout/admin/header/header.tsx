'use client';

import Input from '@/app/_components/base/input/input';
import ProfileSection from '@/app/_components/widgets/admin/profile-section/profile-section';
import { FiSearch } from 'react-icons/fi';
import { useEffect, useState } from 'react';

type Props = {};

const Header = (props: Props) => {
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
      className={`sticky top-20  grid grid-cols-12 items-center gap-4 pb-6 ps-2 sm:top-0  sm:col-span-12 sm:pt-4 lg:top-0 xl:gap-12 ${
        scrolled ? ' bg-coffee-690' : ''
      }`}
    >
      <div className="col-span-6 xl:col-span-4">
        <h1
          className={`smmobile:text-2xl font-dancing text-xl font-bold capitalize text-coffee-360  sm:text-3xl lg:text-4xl `}
        >
          brewmaster's hub
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

export default Header;
