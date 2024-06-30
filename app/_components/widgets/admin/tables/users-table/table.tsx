import { UIComponent } from '@/app/_types/component-types';
import {
  MdOutlineInventory,
  MdOutlineAttachMoney,
  MdOutlineImage,
  MdOutlineSubtitles,
  MdOutlineCategory,
  MdGridOn,
} from 'react-icons/md';
import { FaHashtag } from 'react-icons/fa';
import { GoNumber } from 'react-icons/go';
import { FaRegStar } from 'react-icons/fa';
import { TableHeadCell, Checkbox } from '@/app/_components/base';

export const UsersTable = (props: UIComponent) => {
  return (
    <div className="overflow-x-auto">
      <table className="min-w-full table-auto bg-coffee-10 font-semibold text-coffee-240">
        <thead className=" text-2xl text-coffee-320 md:text-xl">
          <tr className="bg-coffee-30 p-4 py-12 font-dancing capitalize">
            <TableHeadCell>
              <Checkbox />
            </TableHeadCell>
            <TableHeadCell component={FaHashtag}>ID</TableHeadCell>
            <TableHeadCell component={MdOutlineImage}>user</TableHeadCell>
            <TableHeadCell component={MdOutlineImage}>user name</TableHeadCell>
            <TableHeadCell component={MdOutlineCategory}>email</TableHeadCell>
            <TableHeadCell component={MdGridOn}>actions</TableHeadCell>
          </tr>
        </thead>
        <tbody className="overflow-x-scroll">{props.children}</tbody>
      </table>
    </div>
  );
};
