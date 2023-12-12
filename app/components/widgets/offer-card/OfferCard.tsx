import Image from 'next/image';
import { UIComponent } from '@/app/types/types';
import Card from '../card/Card';
import Button from '@/app/components/base/button/button';
import coffeePackages from '@/app/assets/coffee-packages.png';

const OfferCard = (props: UIComponent) => {
  return (
    <section className="relative py-40">
      <Card tailwind="offer-card offer-card-glow">
        <h1 className="text-5xl leading-tight font-dancing capitalize font-bold gradient-text absolute -top-10 left-5 ">
          Offer
        </h1>
        <div className="flex flex-col gap-4 py-12 px-10 items-start">
          <h1 className="text-coffee-70 text-4xl">
            Up To <span className='text-5xl'>50%</span> Off
          </h1>
          <p className="text-white leading-loose text-lg mb-4">
            At our cafe, we take pride in providing our customers with the best
            coffee around. Our carefully-selected coffees come from some of the
            most renowned coffee growing regions in the world, ensuring that
            each cup is unrivaled in flavor and freshness.
          </p>
          <Button label="Shop Now" />
        </div>

        <Image className="w-2/5 " src={coffeePackages} alt="coffee packages" />
      </Card>
    </section>
  );
};

export default OfferCard;
