import { Card } from '@/app/_components/widgets';
import { Icon, Title } from '@/app/_components/base';
import { AiOutlineInfoCircle } from 'react-icons/ai';
import { FiShoppingCart } from 'react-icons/fi';
import Image from 'next/image';
import { shortenDescription } from '@/app/_utils/utils';
import { getAllProducts } from '@/app/api/actions/actions';

const Products = async () => {
  const products = await getAllProducts();
  console.log('products', products);
  return (
    <section className="relative flex flex-wrap justify-center gap-4 bg-coffee-470 px-4 pt-32">
      <Title tailwind="text-coffee-70 absolute top-12">All Products</Title>
      {products.map((item) => (
        <Card
          key={item._id}
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
            src={`/uploads/${item.images[0]}`}
            alt={item.name}
            className="-top-16 left-0"
          />
          <Icon
            component={
              <FiShoppingCart
                size={'1.5rem'}
                className="absolute bottom-3 right-3 cursor-pointer text-coffee-140 "
              />
            }
          />
          <p className="text-md w-full rounded-b-xl bg-coffee-660 py-5 text-center capitalize text-white">
            {shortenDescription(`${item.name} | ${item.description}`, 20)}
          </p>
        </Card>
      ))}
    </section>
  );
};

export default Products;
