import { BsPerson } from 'react-icons/bs';
import { BsCart2 } from 'react-icons/bs';
import { SlMenu } from 'react-icons/sl';
const NavIconsMenu = () => {
  return (
    <nav className="nav-icons-menu ">
      <BsCart2 className="nav-icon" />
      <BsPerson className="nav-icon" />
      <SlMenu className="nav-icon hamburger-icon" />
    </nav>
  );
};
export default NavIconsMenu;
