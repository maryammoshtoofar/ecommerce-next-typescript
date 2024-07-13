import { TableRow, Flexbox, Cell, Checkbox } from '@/app/_components/base';
import { UIComponent } from '@/app/_types/component-types';
import Image from 'next/image';
import { StockLabel, StarRating, ActionsCell } from '@/app/_components/widgets';
import { FaCheck } from 'react-icons/fa';
import { ImCross } from 'react-icons/im';
import { priceFormatter } from '@/app/_utils/utils';
import { FaStar } from 'react-icons/fa6';
import { StoreProvider } from '@/app/_components/layout';
import { ProductDocument } from '@/app/_types/data-types';
import {
  getCategoryTitleById,
  getSubcategoryTitleById,
} from '@/app/api/actions/actions';

type Props = UIComponent & {
  product: ProductDocument;
};

export const ProductsRow = async ({ product }: Props) => {
  console.log('product::', product);
  const stock = product.quantity ? true : false;
  const stockIcon = stock ? <FaCheck /> : <ImCross />;
  const category = await getCategoryTitleById(product.category);
  const subcategory = await getSubcategoryTitleById(product.subcategory);

  return (
    <TableRow key={product._id.toString()}>
      <Cell>
        <Checkbox />
      </Cell>
      <Cell>
        <Image
          src={`${process.env.NEXT_PUBLIC_URL}/img/products/${product.pictures[0]}`}
          alt={product.name}
          className="w-20 max-w-none"
          width={100}
          height={100}
        />
      </Cell>
      <Cell>{product.name}</Cell>
      <Cell tailwind="table-cell">{category}</Cell>
      <Cell tailwind="table-cell">{subcategory}</Cell>
      <Cell>
        <Flexbox>
          <span className="hidden md:inline">$</span>
          <span className=" md:hidden">{product.price}</span>
          <span className="hidden md:inline">
            {priceFormatter(product.price)}
          </span>
        </Flexbox>
      </Cell>
      <Cell>
        <Flexbox>
          <StockLabel stock={stock}>{stockIcon}</StockLabel>
        </Flexbox>
      </Cell>
      <Cell>
        <Flexbox>{product.quantity}</Flexbox>
      </Cell>
      <Cell>
        <StarRating
          rating={product.rating}
          tailwind="hidden md:flex text-yellow-600 hover:text-yellow-700 transition-all"
        />
        <span className="flex items-center text-yellow-600 transition-all hover:text-yellow-700 md:hidden">
          {product.rating} {!product.rating && 0}
          <FaStar />
        </span>
      </Cell>
      <StoreProvider>
        <ActionsCell id={product._id.toString()} />
      </StoreProvider>
    </TableRow>
  );
};
