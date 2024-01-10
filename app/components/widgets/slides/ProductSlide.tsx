import Image from 'next/image';
import { ProductSlideProps } from '@/app/types/types';
import Card from '../card/Card';
import { AiOutlineInfoCircle } from 'react-icons/ai';
import { FiShoppingCart } from 'react-icons/fi';
import { CiCoffeeBean } from 'react-icons/ci';
import Icon from '@/app/components/base/icon/Icon';
const ProductSlide = (props: ProductSlideProps) => {
  const { id, img, alt, type, title } = props.slide;
  return (
    <Card
      key={id}
      tailwind="flex flex-col w-4/5 items-center rounded-xl  relative bg-coffee-640 slide-glow my-12"
    >
      <div className="relative">
        <Icon
          component={
            <AiOutlineInfoCircle className="absolute left-5 top-3 text-coffee-140 " />
          }
        />
        <Image src={img} alt={alt} className=" -top-16 left-0 " />
        <Icon
          component={
            <FiShoppingCart
              size={'1.5rem'}
              className="absolute bottom-3 right-3 text-coffee-140 "
            />
          }
        />
      </div>
      <p className="text-md w-full rounded-b-xl bg-coffee-660 py-5 text-center capitalize text-white  ">
        {title} | {type}
      </p>
    </Card>
  );
};

export default ProductSlide;
