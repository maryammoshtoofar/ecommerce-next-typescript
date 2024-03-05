import { UIComponent } from '@/app/_types/componenet-types';
import TableHeadCell from '@/app/_components/base/admin/table-head-cell/table-head-cell';
import Checkbox from '@/app/_components/base/checkbox/checkbox';
type TableProps = UIComponent & {
  theads: React.ReactNode;
};
const Table = (props: TableProps) => {
  return (
    <div className="overflow-x-auto">
      <table className="min-w-full table-auto bg-coffee-10 font-semibold text-coffee-240">
        <thead className=" text-2xl text-coffee-320 md:text-xl">
          <tr className="bg-coffee-30 p-4 py-12 font-dancing capitalize">
            <TableHeadCell>
              <Checkbox />
            </TableHeadCell>
            {props.theads}
          </tr>
        </thead>
        <tbody className="overflow-x-scroll">{props.children}</tbody>
      </table>
    </div>
  );
};

export default Table;
