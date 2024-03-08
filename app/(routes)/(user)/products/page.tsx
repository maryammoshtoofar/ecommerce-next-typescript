import Card from '@/app/_components/widgets/card/card';
import Icon from '@/app/_components/base/icon/icon';
import { AiOutlineInfoCircle } from 'react-icons/ai';
import { FiShoppingCart } from 'react-icons/fi';
import { products } from '@/app/_lib/products';
import Image from 'next/image';
import { shortenDescription } from '@/app/_utils/utils';
import Title from '@/app/_components/base/admin/section-title/section-title';

const Products = () => {
  return (
    <section className="relative flex flex-wrap justify-center gap-4 bg-coffee-470 px-4 pt-32">
      <Title tailwind="text-coffee-70 absolute top-12">All Products</Title>
      {products.map((item) => (
        <Card
          key={item.id}
          tailwind="md:w-1/3 lg:w-1/6 flex flex-col w-full items-center rounded-xl relative bg-coffee-640 slide-glow"
        >
          <Icon
            component={
              <AiOutlineInfoCircle className="absolute left-5 top-3 text-coffee-140 " />
            }
          />
          <Image src={item.img} alt={item.alt} className="-top-16 left-0" />
          <Icon
            component={
              <FiShoppingCart
                size={'1.5rem'}
                className="absolute bottom-3 right-3 cursor-pointer text-coffee-140 "
              />
            }
          />
          <p className="text-md w-full rounded-b-xl bg-coffee-660 py-5 text-center capitalize text-white">
            {shortenDescription(`${item.title} | ${item.type}`, 20)}
          </p>
        </Card>
      ))}
    </section>
  );
};

export default Products;
