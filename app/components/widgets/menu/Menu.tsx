import { UIComponent } from '@/app/types/types';
import Image from 'next/image';
import React from 'react';
import menuPic from '@/app/assets/menu-pic.png';
import MenuItem from '../menu-item/MenuItem';
import { MenuItems } from '@/lib/menuItems';
import { BsArrowDownRightSquare } from 'react-icons/bs';

const Menu = (props: UIComponent) => {
  return (
    <section className="menu-glow relative flex w-full flex-col items-center ">
      <h1 className="gradient-text text-center font-dancing text-5xl  capitalize ">
        Popular Menu
      </h1>
      <Image src={menuPic} alt="people drinking coffee" />
      <ul>
        {MenuItems.map((menuItem, index) => {
          return (
            <MenuItem
              tailwind={`menu-item-${index + 1}`}
              name={menuItem.name}
              price={menuItem.price}
              dir={index % 2 === 0 ? 'right' : 'left'}
            />
          );
        })}
      </ul>

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
      <span className="absolute -bottom-8 right-5 inline-flex items-center  gap-5 self-end pe-12  text-3xl text-coffee-70">
        Our Menu <BsArrowDownRightSquare className="cursor-pointer" />
      </span>
    </section>
  );
};

export default Menu;
