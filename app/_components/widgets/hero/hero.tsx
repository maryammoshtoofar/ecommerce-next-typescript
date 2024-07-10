import Image from 'next/image';
import title from '@/app/_assets/title.png';
import cup from '@/app//_assets/Cup1.png';
import { Button } from '@/app/_components/base/';
import { Card } from '@/app/_components/widgets';
import { FaMotorcycle } from 'react-icons/fa6';
import { CATALOG, ORDER, PRODUCTS } from '@/app/_config/routes';
import Link from 'next/link';

export const Hero = () => {
  return (
    <section className="hero">
      <article className="hero-content">
        <Image src={title} alt="elza coffee" className="brand-typography" />
        <div className="hero-intro">
          <p className="hero-para-1">
            Today's good mood is sponsored by coffee
          </p>
          <p className="hero-para-2">Search for your coffee now</p>
          <div className="hero-button-container">
            <Link href={PRODUCTS}>
              <Button
                mode="primary"
                label="Shop Now"
                tailwind="hidden whitespace-nowrap md:block"
              />
            </Link>
            <Link href={CATALOG}>
              <Button mode="secondary" label="Catalog" />
            </Link>
          </div>
        </div>
      </article>
      <Card tailwind="hero-coffee-card">
        <Image src={cup} alt="coffee-cup" className="hero-coffee-card-img" />
        <p className="hero-coffee-card-text">But First Coffee</p>
        <Link href={ORDER}>
          <Button
            label="Hurry Up"
            tailwind="my-5 border bg-transparent px-2 text-lg font-thin md:absolute md:-bottom-1 md:right-2 md:h-1/5 md:text-sm lg:h-8 lg:w-32 xl:w-40 lg:px-0 lg:text-lg"
            component={<FaMotorcycle />}
          />
        </Link>
      </Card>
    </section>
  );
};
