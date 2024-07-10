import { OrderTableProps } from '@/app/_types/component-types';
import { TableHeadCell, Checkbox } from '@/app/_components/base';
import { OrderDocument } from '@/app/_types/data-types';
import { OrdersRow as Row } from '@/app/_components/widgets';

export const OrdersTable = ({ headings, orders }: OrderTableProps) => {
  return (
    <div className="overflow-x-auto">
      <table className="min-w-full table-auto bg-coffee-10 font-semibold text-coffee-240">
        <thead className=" text-2xl text-coffee-320 md:text-xl">
          <tr className="bg-coffee-30 p-4 py-12 font-dancing capitalize">
            <TableHeadCell>
              <Checkbox />
            </TableHeadCell>
            {headings.map((heading) => (
              <TableHeadCell key={heading}>{heading}</TableHeadCell>
            ))}
          </tr>
        </thead>
        <tbody className="overflow-x-scroll">
          {orders.map((order: OrderDocument) => {
            return <Row key={order._id.toHexString()} order={order} />;
          })}
        </tbody>
      </table>
    </div>
  );
};
