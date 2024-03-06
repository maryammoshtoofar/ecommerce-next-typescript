'use client';
import { UIComponent } from '@/app/_types/component-types';
import clsx from 'clsx';
import { useState } from 'react';

type DropDownProps = UIComponent & {
  title: string;
  items: string[];
};
import { FaChevronDown } from 'react-icons/fa';
const Dropdown = ({ items, title }: DropDownProps) => {
  const [isOpen, setIsOpen] = useState(false);
  const [selected, setSelected] = useState(title);

  const toggleDropdown = () => {
    console.log(selected);
    setIsOpen(!isOpen);
  };

  const handleChange = (value: string) => {
    setIsOpen(!isOpen);
    setSelected(value);
  };
  return (
    <div className="relative capitalize text-coffee-140">
      <span
        className="top-0 inline-flex w-full items-center justify-between border p-2"
        onClick={toggleDropdown}
      >
        {selected}
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
        {items.map((item) => (
          <li
            key={item}
            className="w-full bg-white hover:bg-coffee-10"
            onClick={() => handleChange(item)}
          >
            {item}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Dropdown;
