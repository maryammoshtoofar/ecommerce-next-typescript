'use client';
import { usePathname } from 'next/navigation';
import Item from '@/app/_components/widgets/admin-nav-item/admin-nav-item';
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
  STOCKPRICE,
  USERS,
} from '@/app/_config/routes';

type Props = {};

const Sidebar = (props: Props) => {
  const pathname = usePathname();

  const isActive = (path: string): boolean => {
    console.log(path, pathname);
    return pathname === path ? true : false;
  };
  return (
    <nav className="sm:admin-nav-glow relative col-span-2 flex min-h-full justify-between px-8 py-2 pt-6 transition-all sm:row-span-3 sm:flex-col sm:items-center sm:justify-normal  sm:gap-6 sm:bg-coffee-190 sm:px-0 sm:py-8 lg:col-span-3 2xl:items-start 2xl:ps-10">
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
      <Item
        active={isActive(STOCKPRICE)}
        component={<MdDiscount />}
        href={STOCKPRICE}
      >
        Stock - Price
      </Item>
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
      <span className="absolute bottom-2 hidden rounded-full bg-coffee-80 p-3  sm:-right-4  sm:inline lg:hidden ">
        <FaChevronRight />
      </span>
    </nav>
  );
};

export default Sidebar;
