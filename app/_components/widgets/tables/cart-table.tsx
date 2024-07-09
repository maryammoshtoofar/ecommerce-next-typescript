'use client';
import { UIComponent } from '@/app/_types/component-types';
import { useAppDispatch, useAppSelector } from '@/app/lib/redux/hooks';
import Image from 'next/image';
import { FaTrashAlt } from 'react-icons/fa';
import { Button } from '../../base';
import {
  clearCart,
  removeFromCart,
} from '@/app/lib/redux/features/cart/cart-slice';
import { toast } from 'react-toastify';
import { useAddNewOrderMutation } from '@/app/lib/redux/features/api/api-slice';
import { OrderI } from '@/app/_types/data-types';
import { useUser } from '@clerk/nextjs';
import { useEffect, useState } from 'react';
import { User } from '@clerk/nextjs/server';
import { useAuth } from '@clerk/nextjs';
export const CartTable = (props: UIComponent) => {
  const cart = useAppSelector((state) => state.cart);
  const dispatch = useAppDispatch();
  const { isLoaded, userId } = useAuth();
  const [user, setUser] = useState<string | null>(null);
  const [addNewOrder, { isLoading }] = useAddNewOrderMutation();
  useEffect(() => {
    if (isLoaded) {
      setUser(userId);
    }
  }, [isLoaded]);

  const handleRemoveFromCart = (id: string) => {
    try {
      dispatch(removeFromCart(id));
      toast.success('Removed from Cart');
    } catch (error) {
      console.log(error);
      toast.error('Something Went Wrong');
    }
  };

  const handleSubmitOrder = async () => {
    console.log('user', user);
    const newOrder = {
      products: cart.items,
      total: cart.total,
      status: 'paid',
      userId: user,
    } as OrderI;
    console.log(newOrder);
    try {
      await addNewOrder(newOrder).unwrap();
      toast.success('Order Submitted Successfully');
      dispatch(clearCart());
    } catch (err) {
      console.error('Failed to add order: ', err);
      toast.error('Something Went Wrong');
    }
  };
  return (
    <div className="font-slab text-sm sm:text-base">
      <table className="">
        <thead>
          <tr>
            <td className="p1 border border-coffee-340 capitalize sm:p-2">
              product
            </td>
            <td className="p1 hidden border border-coffee-340 p-2 capitalize sm:table-cell">
              price
            </td>
            <td className="p1 border border-coffee-340 p-2 capitalize">
              quantity
            </td>
            <td className="p1 hidden border border-coffee-340 p-2 capitalize sm:table-cell">
              subtotal
            </td>
            <td className="p1 border border-coffee-340 p-2 capitalize">
              actions
            </td>
          </tr>
        </thead>
        <tbody>
          {cart.items.map((item) => {
            return (
              <tr key={item._id.toHexString()}>
                <td className="flex w-full flex-col items-center gap-2 border border-coffee-340 p-2 text-center capitalize sm:flex-row">
                  <Image
                    src={`/uploads/${item.pictures[0]}`}
                    alt={item.name}
                    width={50}
                    height={50}
                  />
                  <span className="block max-w-full overflow-x-auto">
                    {item.name}
                  </span>
                  <span className="lowercase">
                    ${item.price} x {item.numberInCart} = $
                    {item.price * item.numberInCart}
                  </span>
                </td>
                <td className="hidden border border-coffee-340 text-center capitalize sm:table-cell sm:p-2">
                  ${item.price}
                </td>
                <td className="border border-coffee-340 text-center capitalize sm:p-2">
                  {item.numberInCart}
                </td>
                <td className="hidden border border-coffee-340 text-center capitalize sm:table-cell sm:p-2">
                  ${item.price * item.numberInCart}
                </td>
                <td className="border border-coffee-340 text-center text-lg capitalize sm:p-2">
                  <FaTrashAlt
                    className="m-auto cursor-pointer"
                    onClick={() => handleRemoveFromCart(item._id.toHexString())}
                  />
                </td>
              </tr>
            );
          })}
        </tbody>
      </table>
      <div className="flex w-full justify-between py-4">
        <p>Total Cart Price: ${cart.total}</p>
        <Button
          label="Proceed to Checkout"
          onClick={handleSubmitOrder}
        ></Button>
      </div>
    </div>
  );
};
