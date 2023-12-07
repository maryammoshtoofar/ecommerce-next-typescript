import Image from 'next/image';
import coffeeMachine from '@/app/assets/coffee-landing.png';
import title from '@/app/assets/title.png';
import cup from '@/app/assets/Cup1.png';
import Button from '@/app/components/base/button/Button';
import Card from '../card/Card';
import { FaMotorcycle } from 'react-icons/fa6';
const Hero = () => {
  return (
    <section className="w-full relative ps-32 flex items-center">
      <div className="absolute top-48">
        <Image src={title} alt="elza coffee" className="w-[40rem]" />
        <div className="absolute top-1/2 flex flex-col">
          <p className="text-coffee-80 text-2xl">
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
      <Card tailwind="absolute self-end flex items-center w-[30%] p-8 rounded-[2rem] rounded-b-none ">
        <Image src={cup} alt="coffee-cup" className="w-1/2" />
        <p className="font-dancing gradient-text text-4xl">But First Coffee</p>
        <Button
          label="Hurry Up"
          tailwind="absolute bottom-0 right-0  mb-5 me-3"
          component={<FaMotorcycle />}
        />
      </Card>
    </section>
  );
};
export default Hero;
