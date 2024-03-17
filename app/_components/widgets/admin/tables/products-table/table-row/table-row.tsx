import Row from '@/app/_components/base/admin/table-row/table-row';
import { UIComponent } from '@/app/_types/component-types';
import Image from 'next/image';
import StockLabel from '../../../stock-label/stock-label';
import { FaCheck } from 'react-icons/fa';
import { ImCross } from 'react-icons/im';
import { priceFormatter } from '@/app/_utils/utils';
import StarRating from '@/app/_components/widgets/star-rating/star-rating';
import Flexbox from '@/app/_components/base/containers/flexbox/flexbox';
import Cell from '../../../../../base/admin/table-cell/table-cell';
import { FaStar } from 'react-icons/fa6';
import Checkbox from '@/app/_components/base/checkbox/checkbox';
import ActionsCell from '../actions-cell/actions-cell';
import StoreProvider from '@/app/_components/layout/store-provider';

type Props = UIComponent & {
  thumbnail: string;
  id: string;
  name: string;
  category: string;
  subcategory: string;
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
  subcategory,
}: Props) => {
  const stockIcon = stock ? <FaCheck /> : <ImCross />;

  return (
    <Row>
      <Cell>
        <Checkbox />
      </Cell>
      <Cell>
        <Image
          src={`http://localhost:3000/uploads/${thumbnail}`}
          alt={name}
          className="w-20 max-w-none"
          width={100}
          height={100}
        />
      </Cell>
      <Cell>{name}</Cell>
      <Cell tailwind="hidden sm:table-cell">{category}</Cell>
      <Cell tailwind="hidden sm:table-cell">{subcategory}</Cell>
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
      <StoreProvider>
        <ActionsCell id={id} />
      </StoreProvider>
    </Row>
  );
};

export default ProductsRow;
