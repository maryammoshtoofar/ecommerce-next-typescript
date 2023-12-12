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
    <section className="relative flex w-full">
      <Image
        src={beans}
        alt="coffee-machine"
        className="absolute right-36 top-6 w-3/5"
      />

      <div className="absolute top-48 ps-24 w-full ">
        <Image src={title} alt="elza coffee" className=" w-[40rem]" />
        <div className="absolute top-1/2 flex flex-col">
          <p className="text-coffee-80 text-2xl pt-12">
            Today's good mood is sponsored by coffee
          </p>

          <p className="text-coffee-80 text-2xl mt-2 mb-16">
            Search for your coffee now
          </p>
          <div className="flex gap-6">
            <Button primary label="Shop Now" />
            <Button label="Catalog" />
          </div>
        </div>
      </div>
      <Image src={coffeeMachine} alt="coffee-machine" className="w-full" />
      <Card tailwind="absolute self-end flex items-center w-1/4 p-2 rounded-[2rem] rounded-b-none ms-10  ">
        <Image src={cup} alt="coffee-cup" className="w-2/4 h-56" />
        <p className="font-dancing gradient-text text-3xl">But First Coffee</p>
        <Button
          label="Hurry Up"
          tailwind="absolute bottom-0 right-0  mb-5 me-3 text-lg px-2"
          component={<FaMotorcycle />}
        />
      </Card>
    </section>
  );
};
export default Hero;
