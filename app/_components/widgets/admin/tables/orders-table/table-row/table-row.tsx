import Row from '@/app/_components/base/admin/table-row/table-row';
import { UIComponent } from '@/app/_types/types';
import Image, { StaticImageData } from 'next/image';
import StockLabel from '../../../stock-label/stock-label';
import { FaCheck } from 'react-icons/fa';
import { ImCross } from 'react-icons/im';
import { priceFormatter } from '@/app/_lib/utils/utils';
import StarRating from '@/app/_components/widgets/star-rating/star-rating';
import { BiDetail } from 'react-icons/bi';
import { LuPencilLine } from 'react-icons/lu';
import { LuTrash } from 'react-icons/lu';
import Flexbox from '@/app/_components/base/containers/flexbox/flexbox';
import Cell from '../../../../../base/admin/table-cell/table-cell';
import { TfiMoreAlt } from 'react-icons/tfi';
import { FaStar } from 'react-icons/fa6';
import Checkbox from '@/app/_components/base/checkbox/checkbox';

type Props = UIComponent & {
  id: string;
  createdAt: string;
  user: string;
  total: number;
  status: 'pending' | 'paid' | 'cancelled';
};

const ProductsRow = ({ id, total, user, createdAt, status }: Props) => {
  return (
    <Row>
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
    </Row>
  );
};

export default ProductsRow;
