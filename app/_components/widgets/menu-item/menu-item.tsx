import { MenuItemProps } from '@/app/_types/types';
import UnderlineLeft from './underline-left';
import UnderLineRight from './underline-right';

const MenuItem = (props: MenuItemProps) => {
  return (
    <li className={props.tailwind}>
      <div
        className={`menu-item-text  ${
          props.dir === 'left' ? ' ps-6 lg:flex-row' : 'pe-6'
        }`}
      >
        <span className="menu-item-price">${props.price}.00</span>
        <span className="menu-item-name">{props.name}</span>
      </div>
      <div className="menu-underline">
        {props.dir === 'left' ? <UnderlineLeft /> : <UnderLineRight />}
      </div>
    </li>
  );
};

export default MenuItem;
