import cappuccino from '@/public/img/cappuccino.png';
import latte from '@/public/img/latte.png';
import frappe from '@/public/img/frappe.png';
import mocha from '@/public/img/mocha.png';
import americano from '@/public/img/americano.png';
import { TrendingProduct as Product } from '@/app/_components/widgets';

export const TrendingProducts = () => {
  return (
    <article className="rounded-lg bg-coffee-10 px-4 pt-3 lg:w-1/3 ">
      <div className="flex w-full items-baseline justify-between py-2">
        <h2 className="text-xl capitalize text-coffee-230">Trending Coffee</h2>
        <span className="cursor-pointer text-sm font-bold uppercase text-coffee-190">
          See all
        </span>
      </div>
      <ul className="flex flex-col gap-4 lg:gap-2">
        <Product img={mocha} name="cappuccino" price={85} amount={240} />
        <Product img={latte} name="latte" price={70.5} amount={220} />
        <Product img={frappe} name="frappuccino" price={82.5} amount={200} />
        <Product img={mocha} name="mocha" price={40.5} amount={190} />
        <Product img={americano} name="americano" price={38.5} amount={180} />
      </ul>
    </article>
  );
};