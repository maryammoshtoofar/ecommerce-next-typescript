'use client';
import { usePathname } from 'next/navigation';
import Item from '@/app/_components/widgets/admin/nav-item/nav-item';
import {
  FaShop,
  FaGear,
  FaUsers,
  FaHouse,
  FaClipboardList,
  FaDoorOpen,
  FaChevronRight,
} from 'react-icons/fa6';
import { MdDiscount } from 'react-icons/md';
import Logo from '@/app/_components/base/logo/logo';
import {
  DASHBOARD,
  INVENTORY,
  ORDERS,
  SETTINGS,
  STOCK,
  USERS,
} from '@/app/_config/routes';
import { useEffect, useState } from 'react';
import clsx from 'clsx';

const Sidebar = () => {
  const pathname = usePathname();
  const isActive = (path: string): boolean => {
    return pathname === path ? true : false;
  };
  const [scrolled, setScrolled] = useState(false);
  const handleScroll = () => {
    if (window.scrollY > 100) setScrolled(true);
    else setScrolled(false);
  };

  useEffect(() => {
    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);
  return (
    <nav
      className={clsx(
        'sm:admin-nav-glow sticky top-0 z-40 col-span-2 flex justify-between px-2 py-2 pt-6 transition-all sm:row-span-3 sm:h-screen sm:flex-col sm:items-center sm:justify-normal  sm:gap-6 sm:bg-coffee-190 sm:px-0 sm:py-8 lg:col-span-3 2xl:items-start 2xl:ps-10',
        { 'bg-coffee-690': scrolled },
      )}
    >
      <Logo className="m-auto w-20 lg:w-32" adminStyle="hidden sm:inline" />
      <Item
        active={isActive(DASHBOARD)}
        component={<FaHouse />}
        href={DASHBOARD}
      >
        Dashboard
      </Item>
      <Item
        active={isActive(INVENTORY)}
        component={<FaShop />}
        href={INVENTORY}
      >
        Inventory
      </Item>
      <Item
        active={isActive(ORDERS)}
        component={<FaClipboardList />}
        href={ORDERS}
      >
        Orders
      </Item>
      {/* <Item
        active={isActive(STOCK)}
        component={<MdDiscount />}
        href={STOCK}
      >
        Stock
      </Item> */}
      <Item active={isActive(USERS)} component={<FaUsers />} href={USERS}>
        Users
      </Item>
      <Item active={isActive(SETTINGS)} component={<FaGear />} href={SETTINGS}>
        Settings
      </Item>
      <Item
        component={<FaDoorOpen />}
        href={SETTINGS}
        tailwind="invisible sm:visible absolute bottom-2 lg:right-0 hover:bg-transparent hover:text-coffee-400 "
      >
        Log Out
      </Item>
      <span className="absolute bottom-2 hidden rounded-full bg-coffee-80 p-3 sm:-right-4 sm:inline lg:hidden ">
        <FaChevronRight />
      </span>
    </nav>
  );
};

export default Sidebar;
