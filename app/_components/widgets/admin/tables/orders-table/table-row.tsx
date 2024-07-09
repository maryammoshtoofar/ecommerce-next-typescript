'use client';
import { Flexbox, Cell, Checkbox, TableRow } from '@/app/_components/base';
import { UIComponent } from '@/app/_types/component-types';
import { priceFormatter } from '@/app/_utils/utils';
import { BiDetail } from 'react-icons/bi';
import { LuPencilLine } from 'react-icons/lu';
import { LuTrash } from 'react-icons/lu';
import { TfiMoreAlt } from 'react-icons/tfi';
import { OrderDocument } from '@/app/_types/data-types';
import { MdDeliveryDining } from 'react-icons/md';
import { useEditOrderMutation } from '@/app/lib/redux/features/api/api-slice';
import { toast } from 'react-toastify';
import { useState } from 'react';

type Props = UIComponent & {
  order: OrderDocument;
};

export const OrdersRow = ({ order }: Props) => {
  const [editOrder, { isLoading }] = useEditOrderMutation();
  const [status, setStatus] = useState(order.status);
  const date = new Date(order.createdAt);

  const handleSendOrder = async () => {
    const editedOrder = {
      orderID: order._id.toString(),
      field: { status: 'delivered' },
    };
    try {
      await editOrder(editedOrder);
      toast.success('Order Sent Successfully');
      setStatus('delivered');
    } catch (err) {
      console.error('Failed to send order: ', err);
      toast.error('Something Went Wrong');
    }
  };
  return (
    <TableRow>
      <Cell>
        <Checkbox />
      </Cell>
      <Cell>{order._id.toString()}</Cell>
      <Cell>{date.toLocaleDateString()}</Cell>
      <Cell tailwind="normal-case">{order.user}</Cell>
      <Cell>
        <Flexbox>
          <span className="hidden md:inline">$</span>
          <span className=" md:hidden">{order.total}</span>
          <span className="hidden md:inline">
            {priceFormatter(order.total)}
          </span>
        </Flexbox>
      </Cell>
      <Cell>{status}</Cell>
      <Cell customContainerStyle="flex lg:gap-3 text-4xl text-coffee-100 ">
        {status === 'paid' ? (
          <MdDeliveryDining
            onClick={handleSendOrder}
            className="cursor-pointer transition-all hover:text-coffee-340"
          />
        ) : (
          <span className="text-base"> -</span>
        )}
        {/* <LuPencilLine className="hidden cursor-pointer transition-all hover:text-coffee-340  md:inline " />
        <LuTrash className="hidden cursor-pointer transition-all hover:text-red-400 md:inline" />
        <TfiMoreAlt className="cursor-pointer transition-all hover:text-coffee-340 md:hidden" /> */}
      </Cell>
    </TableRow>
  );
};
