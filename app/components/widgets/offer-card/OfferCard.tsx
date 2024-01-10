import Image from 'next/image';
import { UIComponent } from '@/app/types/types';
import Card from '../card/Card';
import Button from '@/app/components/base/button/button';
import coffeePackages from '@/app/assets/coffee-packages.png';

const OfferCard = (props: UIComponent) => {
  return (
    <section className="relative py-40">
      <Card tailwind="offer-card offer-card-glow">
        <h1 className="gradient-text absolute -top-10 left-5 font-dancing text-5xl font-bold capitalize leading-tight ">
          Offer
        </h1>
        <div className="flex flex-col items-start gap-4 px-10 py-12">
          <h1 className="text-4xl text-coffee-70">
            Up To <span className="text-5xl">50%</span> Off
          </h1>
          <p className="mb-4 text-lg leading-loose text-white">
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
