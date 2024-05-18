import Image from 'next/image';
import { ProductSlideProps } from '@/app/_types/component-types';
import { Card } from '@/app/_components/widgets';
import { AiOutlineInfoCircle } from 'react-icons/ai';
import { FiShoppingCart } from 'react-icons/fi';
import { CiCoffeeBean } from 'react-icons/ci';
import { Icon } from '@/app/_components/base';
import { shortenDescription } from '@/app/_utils/utils';

export const ProductSlide = (props: ProductSlideProps) => {
  const { id, img, alt, type, title } = props.slide;
  return (
    <Card
      key={id}
      tailwind="flex flex-col w-full items-center rounded-xl relative bg-coffee-640 slide-glow my-10 "
    >
      <div className="relative">
        <Icon
          component={
            <AiOutlineInfoCircle className="absolute left-5 top-3 text-coffee-140 " />
          }
        />
        <Image src={img} alt={alt} className="-top-16 left-0" />
        <Icon
          component={
            <FiShoppingCart
              size={'1.5rem'}
              className="absolute bottom-3 right-3 text-coffee-140 "
            />
          }
        />
      </div>
      <p className="text-md w-full rounded-b-xl bg-coffee-660 py-5 text-center capitalize text-white">
        {shortenDescription(`${title} | ${type}`, 20)}
      </p>
    </Card>
  );
};
