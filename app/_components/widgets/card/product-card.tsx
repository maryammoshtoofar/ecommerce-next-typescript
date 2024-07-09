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
      tailwind="md:w-1/3 lg:w-1/6 flex flex-col w-full items-center rounded-xl relative bg-coffee-640 slide-glow"
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
      <Icon
        component={
          <FiShoppingCart
            size={'1.5rem'}
            className="absolute bottom-3 right-3 cursor-pointer text-coffee-140 "
            onClick={handleAddToCart}
          />
        }
      />
      <p className="text-md w-full rounded-b-xl bg-coffee-660 py-5 text-center capitalize text-white">
        {shortenDescription(`${product.name} | ${product.description}`, 20)}
      </p>
    </Card>
  );
};

export default ProductCard;
