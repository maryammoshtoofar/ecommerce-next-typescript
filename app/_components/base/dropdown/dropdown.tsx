'use client';
import { CategoryI, SubcategoryI } from '@/app/_types/data-types';
import { UIComponent } from '@/app/_types/component-types';
import clsx from 'clsx';
import { useState } from 'react';
import { FaChevronDown } from 'react-icons/fa';
import { useAppDispatch } from '@/app/lib/redux/hooks';
import { ActionCreatorWithPayload } from '@reduxjs/toolkit';
type DropDownProps = UIComponent & {
  title: string;
  items: CategoryI[] | SubcategoryI[] | null;
  selectOption: ActionCreatorWithPayload<any, string>;
};
const Dropdown = ({ items, title, selectOption }: DropDownProps) => {
  const dispatch = useAppDispatch();

  const [isOpen, setIsOpen] = useState(false);
  const toggleDropdown = () => {
    setIsOpen(!isOpen);
  };

  const handleChange = (value: CategoryI) => {
    setIsOpen(!isOpen);
    dispatch(selectOption(value));
  };
  return (
    <div className="relative capitalize text-coffee-140">
      <span
        className="top-0 inline-flex w-full items-center justify-between border p-2"
        onClick={toggleDropdown}
      >
        {title}
        <FaChevronDown
          className="z-50 cursor-pointer"
          onClick={toggleDropdown}
        />
      </span>
      <ul
        className={clsx(
          'absolute max-h-44 w-full  overflow-y-auto bg-white transition-all',
          {
            'slide-bottom opacity-1 z-40': isOpen,
            'slide-top -z-50 opacity-0': !isOpen,
          },
        )}
      >
        {items &&
          items.map((item) => (
            <li
              key={item._id}
              className="w-full bg-white hover:bg-coffee-10"
              onClick={() => handleChange(item)}
            >
              {item.title}
            </li>
          ))}
      </ul>
    </div>
  );
};

export default Dropdown;
