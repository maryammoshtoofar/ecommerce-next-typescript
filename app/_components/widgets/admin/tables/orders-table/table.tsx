import { UIComponent } from '@/app/_types/componenet-types';
import {
  MdOutlineAttachMoney,
  MdOutlineAccountCircle,
  MdGridOn,
} from 'react-icons/md';
import { GrStatusInfo } from 'react-icons/gr';
import { MdDateRange } from 'react-icons/md';
import { FaHashtag } from 'react-icons/fa';
import TableHeadCell from '../../../../base/admin/table-head-cell/table-head-cell';
import Checkbox from '@/app/_components/base/checkbox/checkbox';

const Table = (props: UIComponent) => {
  return (
    <div className="overflow-x-auto">
      <table className="min-w-full table-auto bg-coffee-10 font-semibold text-coffee-240">
        <thead className=" text-2xl text-coffee-320 md:text-xl">
          <tr className="bg-coffee-30 p-4 py-12 font-dancing capitalize">
            <TableHeadCell>
              <Checkbox />
            </TableHeadCell>

            <TableHeadCell component={FaHashtag}>ID</TableHeadCell>
            <TableHeadCell component={MdDateRange}>date</TableHeadCell>
            <TableHeadCell component={MdOutlineAccountCircle}>
              user
            </TableHeadCell>
            <TableHeadCell component={MdOutlineAttachMoney}>
              total price
            </TableHeadCell>
            <TableHeadCell component={GrStatusInfo}>status</TableHeadCell>
            <TableHeadCell component={MdGridOn}>actions</TableHeadCell>
          </tr>
        </thead>
        <tbody className="overflow-x-scroll">{props.children}</tbody>
      </table>
    </div>
  );
};

export default Table;
