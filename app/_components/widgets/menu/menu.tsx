import { UIComponent } from '@/app/_types/types';
import Image from 'next/image';
import menuPicMan from '@/public/img/menu-pic-man.png';
import menuPicWoman from '@/public/img/menu-pic-woman.png';
import MenuItem from '../menu-item/menu-item';
import { MenuItems } from '@/app/_lib/menu-items';
import { BsArrowDownRightSquare } from 'react-icons/bs';

const Menu = (props: UIComponent) => {
  return (
    <section className="menu-section">
      <h1 className="menu-title">Popular Menu</h1>
      <div className="menu-container">
        <div className="menu-images">
          <Image
            src={menuPicWoman}
            alt="woman-drinking-coffee"
            className="menu-image-woman"
          />
          <Image
            src={menuPicMan}
            alt="man-drinking-coffee"
            className="menu-image-man"
          />
        </div>
        <ul className="menu-list">
          {MenuItems.map((menuItem, index) => {
            return (
              <MenuItem
                key={menuItem.id}
                tailwind={`menu-item menu-item-${index + 1}`}
                name={menuItem.name}
                price={menuItem.price}
                dir={index % 2 === 0 ? 'left' : 'right'}
              />
            );
          })}
        </ul>
      </div>
      <ul className="invisible">
        <li dir="left" className="menu-item-1" />
        <li dir="left" className="menu-item-2" />
        <li dir="left" className="menu-item-3" />
        <li dir="left" className="menu-item-4" />
        <li dir="right" className="menu-item-5" />
        <li dir="right" className="menu-item-6" />
        <li dir="right" className="menu-item-7" />
        <li dir="right" className="menu-item-8" />
      </ul>
      <span className="menu-link">
        Our Menu <BsArrowDownRightSquare className="cursor-pointer" />
      </span>
    </section>
  );
};

export default Menu;
