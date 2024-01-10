import { MenuItemProps } from '@/app/types/types';
import UnderlineLeft from './underlineLeft';
import UnderLineRight from './underlineRight';

const MenuItem = (props: MenuItemProps) => {
  return (
    <li
      className={`absolute w-1/2 font-dancing text-4xl text-coffee-70 ${props.tailwind}`}
    >
      <div className="flex gap-32 px-4 ">
        <span className="text-2xl">${props.price}.00</span>
        <span className="capitalize">{props.name}</span>
      </div>
      {props.dir === 'left' ? <UnderlineLeft /> : <UnderLineRight />}
    </li>
  );
};

export default MenuItem;
