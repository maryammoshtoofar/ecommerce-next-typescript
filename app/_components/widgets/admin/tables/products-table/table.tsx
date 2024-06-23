import { UIComponent } from '@/app/_types/component-types';
import { TableHeadCell as Th, Checkbox } from '@/app/_components/base';

export const ProductsTable = (props: UIComponent) => {
  return (
    <div className="w-full overflow-auto row-span-11">
      <table className="table-auto bg-coffee-10 font-semibold text-coffee-240">
        <thead className=" text-2xl text-coffee-320 md:text-xl">
          <tr className="bg-coffee-30 p-4 py-12 font-dancing capitalize">
            <Th>
              <Checkbox />
            </Th>
            <Th>image</Th>
            <Th>name</Th>
            <Th>category</Th>
            <Th>subcategory</Th>
            <Th>price</Th>
            <Th>stock</Th>
            <Th>quantity</Th>
            <Th>rating</Th>
            <Th>actions</Th>
          </tr>
        </thead>
        <tbody className="overflow-x-scroll">{props.children}</tbody>
      </table>
    </div>
  );
};
