import Image from 'next/image';
import { UIComponent } from '@/app/types/types';
import Card from '../card/Card';
import Button from '@/app/components/base/button/button';
import coffeePackages from '@/app/assets/coffee-packages.png';

const OfferCard = (props: UIComponent) => {
  return (
    <section className="offer-section">
      <Card tailwind="offer-card">
        <h1 className="offer-card-title">Offer</h1>
        <div className="offer-card-content">
          <h1 className="offer-card-content-title">
            Up To <span className="text-5xl">50%</span> Off
          </h1>
          <p className="offer-card-caption">
            At our cafe, we take pride in providing our customers with the best
            coffee around. Our carefully-selected coffees come from some of the
            most renowned coffee growing regions in the world, ensuring that
            each cup is unrivaled in flavor and freshness.
          </p>
          <Button mode="tertiary" label="Shop Now" tailwind="offer-card-btn" />
        </div>
        <Image
          className="offer-card-img"
          src={coffeePackages}
          alt="coffee packages"
        />
      </Card>
    </section>
  );
};

export default OfferCard;
