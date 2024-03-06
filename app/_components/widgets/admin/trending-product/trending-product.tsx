import Image, { StaticImageData } from 'next/image';
import { UIComponent } from '@/app/_types/component-types';
import { priceFormatter } from '@/app/_lib/utils/utils';

type Props = UIComponent & {
  img: StaticImageData;
  name: string;
  price: number;
  amount: number;
};

const Product = ({ img, name, price, amount }: Props) => {
  const formattedPrice = priceFormatter(price);
  return (
    <li className="flex w-full items-center py-1">
      <div className="flex items-center gap-2">
        <Image src={img} alt={name} className="w-1/2 lg:w-1/4" />
        <div className="flex flex-col items-start">
          <span className="font-bold capitalize text-coffee-200">{name}</span>
          <span className="text-sm font-bold text-slate-400">{`$${formattedPrice}`}</span>
        </div>
      </div>
      <span className="font-bold text-coffee-120">{amount}</span>
    </li>
  );
};

export default Product;
