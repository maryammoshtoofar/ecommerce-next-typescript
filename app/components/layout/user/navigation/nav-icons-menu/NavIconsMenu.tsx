import { BsPerson } from 'react-icons/bs';
import { BsCart2 } from 'react-icons/bs';
const NavIconsMenu = () => {
  return (
    <div className="flex">
      <BsCart2 size="1.2rem" className="text-coffee-70 cursor-pointer" />
      <BsPerson size="1.2rem" className="text-coffee-70 cursor-pointer" />
    </div>
  );
};
export default NavIconsMenu;
