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
  thumbnail: StaticImageData;
  id: string;
  name: string;
  category: string;
  stock: boolean;
  price: number;
  quantity: number;
  rating: number;
};

const ProductsRow = ({
  thumbnail,
  id,
  name,
  category,
  stock,
  price,
  quantity,
  rating,
}: Props) => {
  const stockIcon = stock ? <FaCheck /> : <ImCross />;
  return (
    <Row>
      <Cell>
        <Checkbox />
      </Cell>
      <Cell>
        <Image src={thumbnail} alt={name} className="w-20 max-w-none" />
      </Cell>
      <Cell>{id}</Cell>
      <Cell>{name}</Cell>
      <Cell tailwind="hidden sm:table-cell">{category}</Cell>
      <Cell>
        <Flexbox>
          <span className="hidden md:inline">$</span>
          <span className=" md:hidden">{price}</span>
          <span className="hidden md:inline">{priceFormatter(price)}</span>
        </Flexbox>
      </Cell>
      <Cell>
        <Flexbox>
          <StockLabel stock={stock}>{stockIcon}</StockLabel>
        </Flexbox>
      </Cell>
      <Cell>
        <Flexbox>{quantity}</Flexbox>
      </Cell>
      <Cell>
        <StarRating
          rating={rating}
          tailwind="hidden md:flex text-yellow-600 hover:text-yellow-700 transition-all"
        />
        <span className="flex items-center text-yellow-600 transition-all hover:text-yellow-700 md:hidden">
          {rating} <FaStar />
        </span>
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
