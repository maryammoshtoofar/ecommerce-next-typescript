import { Flexbox, Cell, Checkbox, TableRow } from '@/app/_components/base';
import { UIComponent } from '@/app/_types/component-types';
import { priceFormatter } from '@/app/_utils/utils';
import { BiDetail } from 'react-icons/bi';
import { LuPencilLine } from 'react-icons/lu';
import { LuTrash } from 'react-icons/lu';
import { TfiMoreAlt } from 'react-icons/tfi';
import { OrderDocument } from '@/app/_types/data-types';
import { MdDeliveryDining } from 'react-icons/md';

type Props = UIComponent & {
  order: OrderDocument;
};

export const OrdersRow = async ({ order }: Props) => {
  const date = new Date(order.createdAt);
  console.log('orser', order);
  return (
    <TableRow>
      <Cell>
        <Checkbox />
      </Cell>
      <Cell>{order._id.toHexString()}</Cell>
      <Cell>{date.toLocaleDateString()}</Cell>
      <Cell tailwind="normal-case">{order.user}</Cell>
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
      <Cell customContainerStyle="flex lg:gap-3 text-4xl text-coffee-100 ">
        <MdDeliveryDining className="cursor-pointer transition-all hover:text-coffee-340" />
        {/* <LuPencilLine className="hidden cursor-pointer transition-all hover:text-coffee-340  md:inline " />
        <LuTrash className="hidden cursor-pointer transition-all hover:text-red-400 md:inline" />
        <TfiMoreAlt className="cursor-pointer transition-all hover:text-coffee-340 md:hidden" /> */}
      </Cell>
    </TableRow>
  );
};
