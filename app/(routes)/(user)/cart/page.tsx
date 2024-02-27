import Button from '@/app/_components/base/button/button';
import { PRODUCTS } from '@/app/_config/routes';
import Link from 'next/link';
import React from 'react';

type Props = {};

const Cart = (props: Props) => {
  return (
    <section className="flex min-h-screen flex-col items-center justify-center gap-8 bg-coffee-470 font-dancing text-3xl text-coffee-60">
      Your cart is empty !
      <Link href={PRODUCTS}>
        <Button label="Start Shopping" />
      </Link>
    </section>
  );
};

export default Cart;
