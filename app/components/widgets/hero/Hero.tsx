import Image from 'next/image';
import title from '@/app/assets/title.png';
import cup from '@/app/assets/Cup1.png';
import Button from '@/app/components/base/button/Button';
import Card from '../card/Card';
import { FaMotorcycle } from 'react-icons/fa6';

const Hero = () => {
  return (
    <section className="hero">
      <div className="hero-content">
        <Image src={title} alt="elza coffee" className="brand-typography" />
        <div className="hero-intro">
          <p className="hero-para-1">
            Today's good mood is sponsored by coffee
          </p>
          <p className="hero-para-2">Search for your coffee now</p>
          <div className="hero-button-container">
            <Button mode="primary" label="Shop Now" tailwind="hero-cta" />
            <Button mode="secondary" label="Catalog" />
          </div>
        </div>
      </div>
      <Card tailwind="hero-coffee-card">
        <Image src={cup} alt="coffee-cup" className="hero-coffee-card-img" />
        <p className="hero-coffee-card-text">But First Coffee</p>
        <Button
          label="Hurry Up"
          tailwind="hero-coffee-card-btn"
          component={<FaMotorcycle />}
        />
      </Card>
    </section>
  );
};
export default Hero;
