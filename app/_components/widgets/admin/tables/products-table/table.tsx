import { UIComponent } from '@/app/_types/component-types';
import {
  MdOutlineInventory,
  MdOutlineAttachMoney,
  MdOutlineImage,
  MdOutlineSubtitles,
  MdOutlineCategory,
  MdGridOn,
} from 'react-icons/md';
import { GoNumber } from 'react-icons/go';
import { FaRegStar } from 'react-icons/fa';
import { TableHeadCell, Checkbox } from '@/app/_components/base';

export const ProductsTable = (props: UIComponent) => {
  return (
    <div className='w-full overflow-scroll'>
      <table className="table-auto bg-coffee-10 font-semibold text-coffee-240">
        <thead className=" text-2xl text-coffee-320 md:text-xl">
          <tr className="bg-coffee-30 p-4 py-12 font-dancing capitalize">
            <TableHeadCell>
              <Checkbox />
            </TableHeadCell>
            <TableHeadCell component={MdOutlineImage}>image</TableHeadCell>
            <TableHeadCell component={MdOutlineSubtitles}>name</TableHeadCell>
            <TableHeadCell component={MdOutlineCategory}>
              category
            </TableHeadCell>
            <TableHeadCell component={MdOutlineCategory}>
              subcategory
            </TableHeadCell>
            <TableHeadCell component={MdOutlineAttachMoney}>
              price
            </TableHeadCell>
            <TableHeadCell component={MdOutlineInventory}>stock</TableHeadCell>
            <TableHeadCell component={GoNumber}>quantity</TableHeadCell>
            <TableHeadCell component={FaRegStar}>rating</TableHeadCell>
            <TableHeadCell component={MdGridOn}>actions</TableHeadCell>
          </tr>
        </thead>
        <tbody className="overflow-x-scroll">{props.children}</tbody>
      </table>
    </div>
  );
};
