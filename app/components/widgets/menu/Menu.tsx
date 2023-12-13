import { UIComponent } from '@/app/types/types';
import Image from 'next/image';
import React from 'react';
import menuPic from '@/app/assets/menu-pic.png';
import MenuItem from '../menu-item/MenuItem';
import { MenuItems } from '@/lib/menuItems';
import { BsArrowDownRightSquare } from 'react-icons/bs';

const Menu = (props: UIComponent) => {
  return (
    <section className="flex flex-col items-center relative w-full menu-glow ">
      <h1 className="gradient-text text-5xl capitalize font-dancing  text-center ">
        Popular Menu
      </h1>
      <Image src={menuPic} alt="people drinking coffee" />
      <ul>
        {MenuItems.map((menuItem, index) => {
          console.log(index);
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
      <span className="self-end text-coffee-70 absolute -bottom-8 right-5  inline-flex gap-5 pe-12  text-3xl items-center">
        Our Menu <BsArrowDownRightSquare className='cursor-pointer' />
      </span>
    </section>
  );
};

export default Menu;
