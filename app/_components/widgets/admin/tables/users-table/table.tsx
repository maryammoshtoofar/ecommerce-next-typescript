import { UIComponent } from '@/app/_types/component-types';
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
            <TableHeadCell>ID</TableHeadCell>
            <TableHeadCell>user</TableHeadCell>
            <TableHeadCell>user name</TableHeadCell>
            <TableHeadCell>email</TableHeadCell>
            <TableHeadCell>actions</TableHeadCell>
          </tr>
        </thead>
        <tbody className="overflow-x-scroll">{props.children}</tbody>
      </table>
    </div>
  );
};
