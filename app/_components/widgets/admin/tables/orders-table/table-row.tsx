import { Flexbox, Cell, Checkbox, TableRow } from '@/app/_components/base';
import { UIComponent } from '@/app/_types/component-types';
import Image, { StaticImageData } from 'next/image';
import { StockLabel } from '@/app/_components/widgets';
import { FaCheck } from 'react-icons/fa';
import { ImCross } from 'react-icons/im';
import { priceFormatter } from '@/app/_utils/utils';
import { StarRating } from '@/app/_components/widgets';
import { BiDetail } from 'react-icons/bi';
import { LuPencilLine } from 'react-icons/lu';
import { LuTrash } from 'react-icons/lu';
import { TfiMoreAlt } from 'react-icons/tfi';
import { FaStar } from 'react-icons/fa6';
import { OrderI, OrderDocument } from '@/app/_types/data-types';

type Props = UIComponent & {
  order: OrderDocument;
};

export const OrdersRow = ({ order }: Props) => {
  const date = new Date(order.createdAt);
  return (
    <TableRow>
      <Cell>
        <Checkbox />
      </Cell>
      <Cell>{order._id.toHexString()}</Cell>
      <Cell>{date.toLocaleDateString()}</Cell>
      <Cell>{order.userId}</Cell>
      <Cell>
        <Flexbox>
          <span className="hidden md:inline">$</span>
          <span className=" md:hidden">{order.total}</span>
          <span className="hidden md:inline">
            {priceFormatter(order.total)}
          </span>
        </Flexbox>
      </Cell>
      <Cell>
        {order.status}
        {/* <Flexbox>
          <StockLabel tailwind={style}>{stockLabel}</StockLabel>
        </Flexbox> */}
      </Cell>
      <Cell customContainerStyle="flex lg:gap-3 text-lg text-coffee-100 ">
        <BiDetail className="hidden cursor-pointer transition-all hover:text-coffee-340 md:inline" />
        <LuPencilLine className="hidden cursor-pointer transition-all hover:text-coffee-340  md:inline " />
        <LuTrash className="hidden cursor-pointer transition-all hover:text-red-400 md:inline" />
        <TfiMoreAlt className="cursor-pointer transition-all hover:text-coffee-340 md:hidden" />
      </Cell>
    </TableRow>
  );
};
