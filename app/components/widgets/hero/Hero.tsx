import Image from 'next/image';
import coffeeMachine from '@/app/assets/coffee-landing.png';
import beans from '@/app/assets/hero-coffees.png';
import title from '@/app/assets/title.png';
import cup from '@/app/assets/Cup1.png';
import Button from '@/app/components/base/button/Button';
import Card from '../card/Card';
import { FaMotorcycle } from 'react-icons/fa6';

const Hero = () => {
  return (
    <section className="hero">
      <div className="relative ps-6 lg:ps-24 pt-24 lg:pt-52">
        <Image src={title} alt="elza coffee" className="absolute md:w-2/5 w-3/5" />
        <div className="flex flex-col pt-28 md:pt-32 xl:pt-52 text-sm">
          <p className="text-coffee-80 text-xl hidden md:block">
            Today's good mood is sponsored by coffee
          </p>
          <p className="text-coffee-80 text-xl mt-2 mb-4 hidden md:block">
            Search for your coffee now
          </p>
          <div className="flex flex-col-reverse lg:flex-row items-start lg:gap-14 gap-2 w-1/5">
            <Button
              primary
              label="Shop Now"
              tailwind="w-full whitespace-nowrap "
            />
            <Button label="Catalog" tailwind="w-full" />
          </div>
        </div>
      </div>
      {/* <Card tailwind="absolute bottom-0 left-20 flex items-center w-1/4 p-2 rounded-[2rem] rounded-b-none  ">
        <Image src={cup} alt="coffee-cup" className="w-2/4 h-56" />
        <p className="font-dancing gradient-text text-3xl">But First Coffee</p>
        <Button
          label="Hurry Up"
          tailwind="absolute bottom-0 right-0  mb-5 me-3 text-lg px-2"
          component={<FaMotorcycle />}
        />
      </Card> */}
    </section>
  );
};
export default Hero;
