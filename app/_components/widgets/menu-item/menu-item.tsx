import { MenuItemProps } from '@/app/_types/component-types';
import clsx from 'clsx';
import UnderlineLeft from './underline-left';
import UnderLineRight from './underline-right';

export const MenuItem = ({ dir, tailwind, price, name }: MenuItemProps) => {
  return (
    <li className={tailwind}>
      <div
        className={clsx('menu-item-text', {
          'ps-6 lg:flex-row': dir === 'left',
          'pe-6': dir !== 'left',
        })}
      >
        <span className="menu-item-price">${price}.00</span>
        <span className="menu-item-name">{name}</span>
      </div>
      <div className="menu-underline">
        {dir === 'left' ? <UnderlineLeft /> : <UnderLineRight />}
      </div>
    </li>
  );
};
