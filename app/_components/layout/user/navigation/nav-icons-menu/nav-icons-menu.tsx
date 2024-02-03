import { AUTH, CART } from '@/app/_config/routes';
import Link from 'next/link';
import { BsPerson } from 'react-icons/bs';
import { BsCart2 } from 'react-icons/bs';
import { SlMenu } from 'react-icons/sl';
const NavIconsMenu = () => {
  return (
    <nav className="nav-icons-menu ">
      <Link href={CART}>
        <BsCart2 className="nav-icon" />
      </Link>
      <Link href={AUTH}>
        <BsPerson className="nav-icon" />
      </Link>
      <SlMenu className="nav-icon hamburger-icon" />
    </nav>
  );
};
export default NavIconsMenu;
