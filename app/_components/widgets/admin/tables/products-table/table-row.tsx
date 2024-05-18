import { TableRow, Flexbox, Cell, Checkbox } from '@/app/_components/base';
import { UIComponent } from '@/app/_types/component-types';
import Image from 'next/image';
import { StockLabel, StarRating, ActionsCell } from '@/app/_components/widgets';
import { FaCheck } from 'react-icons/fa';
import { ImCross } from 'react-icons/im';
import { priceFormatter } from '@/app/_utils/utils';
import { FaStar } from 'react-icons/fa6';
import { StoreProvider } from '@/app/_components/layout';

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

export const ProductsRow = ({
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
    <TableRow>
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
    </TableRow>
  );
};
