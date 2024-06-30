import { Flexbox, Cell, Checkbox, TableRow } from '@/app/_components/base';
import { UIComponent } from '@/app/_types/component-types';
import Image, { StaticImageData } from 'next/image';
import { StockLabel } from '@/app/_components/widgets';
import { FaCheck } from 'react-icons/fa';
import { ImCross } from 'react-icons/im';
import { priceFormatter } from '@/app/_utils/utils';
import StarRating from '@/app/_components/widgets/star-rating/star-rating';
import { BiDetail } from 'react-icons/bi';
import { LuPencilLine } from 'react-icons/lu';
import { LuTrash } from 'react-icons/lu';
import { TfiMoreAlt } from 'react-icons/tfi';
import { FaStar } from 'react-icons/fa6';

type Props = UIComponent & {
  id: string;
  createdAt: string;
  user: string;
  total: number;
  status: 'pending' | 'paid' | 'cancelled';
};

export const OrdersRow = ({ id, total, user, createdAt, status }: Props) => {
  return (
    <TableRow>
      <Cell>
        <Checkbox />
      </Cell>
      <Cell>{id}</Cell>
      <Cell>{createdAt}</Cell>
      <Cell>{user}</Cell>
      <Cell>
        <Flexbox>
          <span className="hidden md:inline">$</span>
          <span className=" md:hidden">{total}</span>
          <span className="hidden md:inline">{priceFormatter(total)}</span>
        </Flexbox>
      </Cell>
      <Cell>
        {status}
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
