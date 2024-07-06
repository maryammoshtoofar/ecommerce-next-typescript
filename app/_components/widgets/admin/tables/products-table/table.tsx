import { TableProps } from '@/app/_types/component-types';
import { TableHeadCell as Th, Checkbox } from '@/app/_components/base';
import { ProductI } from '@/app/_types/data-types';
import {
  getCategoryTitleById,
  getSubcategoryTitleById,
} from '@/app/api/actions/actions';
import { ProductsRow } from './table-row';

export const ProductsTable = async (props: TableProps) => {
  return (
    <div className="row-span-11 w-full overflow-auto">
      <table className="table-auto bg-coffee-10 font-semibold text-coffee-240">
        <thead className=" text-2xl text-coffee-320 md:text-xl">
          <tr className="bg-coffee-30 p-4 py-12 font-dancing capitalize">
            <Th>
              {/* checkbox goes here */}
              <Checkbox />
            </Th>
            {props.headings.map((heading) => (
              <Th key={heading}>{heading}</Th>
            ))}
          </tr>
        </thead>
        <tbody className="overflow-x-scroll">
          {props.products.map((product: ProductI) => {
            return <ProductsRow product={product} />;
          })}
        </tbody>
      </table>
    </div>
  );
};
