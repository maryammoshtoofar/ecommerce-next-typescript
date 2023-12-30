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
            <AiOutlineInfoCircle className="absolute top-3 left-5 text-coffee-140 " />
          }
        />
        <Image src={img} alt={alt} className=" -top-16 left-0 " />
        <Icon
          component={
            <FiShoppingCart
              size={'1.5rem'}
              className="absolute right-3 bottom-3 text-coffee-140 "
            />
          }
        />
      </div>
      <p className="text-white bg-coffee-660 text-center rounded-b-xl py-5 capitalize w-full text-md  ">
        {title} | {type}
      </p>
    </Card>
  );
};

export default ProductSlide;
