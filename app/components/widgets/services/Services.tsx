import Image from 'next/image';
import { UIComponent } from '@/app/types/types';
import { services } from '@/lib/services';
import Card from '../card/Card';
import Bean2 from '@/app/components/base/wandering-coffee-beans/Bean2';

const Services = (props: UIComponent) => {
  return (
    <section className="flex flex-col items-center gap-12">
      {/* <Bean2 tailwind="absolute -right-28 bottom-0 bg-red-600" /> */}
      <h1 className="gradient-text font-dancing text-6xl font-bold capitalize">
        services
      </h1>
      <div className="flex gap-24">
        {services.map((service) => (
          <Card
            key={service.id}
            tailwind="rounded-[2rem] bg-coffee-270 capitalize text-coffee-70 flex flex-col items-center px-8 py-10 "
          >
            <Image src={service.img} alt={service.title} />
            {service.title}
          </Card>
        ))}
      </div>
    </section>
  );
};

export default Services;
