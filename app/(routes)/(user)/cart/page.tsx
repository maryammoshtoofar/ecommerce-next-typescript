'use client';
import { Button } from '@/app/_components/base';
import { CartTable } from '@/app/_components/widgets';
import { PRODUCTS } from '@/app/_config/routes';
import { useAppSelector } from '@/app/lib/redux/hooks';
import Link from 'next/link';

type Props = {};

const Cart = (props: Props) => {
  const cart = useAppSelector((state) => state.cart);
  console.log('Cart', cart);
  return (
    <section className="flex min-h-screen flex-col items-center justify-center gap-8 bg-coffee-470 font-dancing text-3xl text-coffee-60">
      {cart.total ? (
        <CartTable />
      ) : (
        <>
          {' '}
          <span>Your cart is empty !</span>{' '}
          <Link href={PRODUCTS}>
            <Button label="Start Shopping" />
          </Link>
        </>
      )}
    </section>
  );
};

export default Cart;
