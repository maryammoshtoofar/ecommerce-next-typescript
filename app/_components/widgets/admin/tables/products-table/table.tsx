import { ProductTableProps } from '@/app/_types/component-types';
import { TableHeadCell as Th, Checkbox } from '@/app/_components/base';
import { ProductDocument } from '@/app/_types/data-types';
import { ProductsRow } from './table-row';

export const ProductsTable = async (props: ProductTableProps) => {
  return (
    <div className="row-span-11 w-full overflow-auto">
      <table className="table-auto bg-coffee-10 font-semibold text-coffee-240">
        <thead className=" text-2xl text-coffee-320 md:text-xl">
          <tr className="bg-coffee-30 p-4 py-12 font-dancing capitalize">
            <Th>
              <Checkbox />
            </Th>
            {props.headings.map((heading) => (
              <Th key={heading}>{heading}</Th>
            ))}
          </tr>
        </thead>
        <tbody className="overflow-x-scroll">
          {props.products.map((product: ProductDocument) => {
            const id = product._id.toHexString();
            return <ProductsRow key={id} product={product} />;
          })}
        </tbody>
      </table>
    </div>
  );
};
