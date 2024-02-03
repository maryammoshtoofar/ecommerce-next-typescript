import Link from 'next/link';
import { BsPerson } from 'react-icons/bs';
import { BsCart2 } from 'react-icons/bs';
import { SlMenu } from 'react-icons/sl';
const NavIconsMenu = () => {
  return (
    <nav className="nav-icons-menu ">
      <BsCart2 className="nav-icon" />
      <Link href="/auth">
        <BsPerson className="nav-icon" />
      </Link>

      <SlMenu className="nav-icon hamburger-icon" />
    </nav>
  );
};
export default NavIconsMenu;
