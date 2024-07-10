'use client';
import Image from 'next/image';
import { Card } from './card';
import { AiOutlineInfoCircle } from 'react-icons/ai';
import { Icon } from '../../base';
import { FiShoppingCart } from 'react-icons/fi';
import { shortenDescription } from '@/app/_utils/utils';
import { useAppDispatch } from '@/app/lib/redux/hooks';
import {
  addToCart,
  updateTotalPrice,
} from '@/app/lib/redux/features/cart/cart-slice';
import { ProductCardProps } from '@/app/_types/component-types';
import { toast } from 'react-toastify';

const ProductCard = ({ product }: ProductCardProps) => {
  const dispatch = useAppDispatch();
  const handleAddToCart = () => {
    try {
      const cartItem = Object.assign(product);
      dispatch(addToCart(cartItem));
      dispatch(updateTotalPrice(product.price));
      toast.success('added to cart');
    } catch (error) {
      console.log(error);
      toast.error('Something went wrong');
    }
  };
  return (
    <Card
      key={product._id.toString()}
      tailwind="flex sm:flex-col w-full items-center relative bg-coffee-640 slide-glow rounded-none sm:rounded-lg"
    >
      <Icon
        component={
          <AiOutlineInfoCircle className="absolute left-5 top-3 text-coffee-140 " />
        }
      />
      <Image
        width={100}
        height={100}
        src={`/uploads/${product.pictures[0]}`}
        alt={product.name}
        className="-top-16 left-0"
      />
      <p className="text-sm font-bold text-coffee-520 sm:hidden">
        {product.name}
      </p>
      <Icon
        component={
          <FiShoppingCart
            size={'1.5rem'}
            className="absolute bottom-1 right-3 cursor-pointer text-coffee-140 sm:bottom-3 "
            onClick={handleAddToCart}
          />
        }
      />
      <p className="text-md hidden w-full rounded-none bg-coffee-660 py-5 text-center capitalize text-white sm:block sm:rounded-b-lg">
        {shortenDescription(`${product.name} | ${product.description}`, 20)}
      </p>
    </Card>
  );
};

export default ProductCard;
