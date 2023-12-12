import Image from 'next/image';
import { UIComponent } from '@/app/types/types';
import { services } from '@/lib/services';
import Card from '../card/Card';

const Services = (props: UIComponent) => {
  return (
    <section className="flex flex-col items-center gap-12">
      <h1 className="text-6xl font-dancing capitalize font-bold gradient-text">
        services
      </h1>
      <div className="flex gap-24">
        {services.map((service) => (
          <Card tailwind="rounded-[2rem] bg-coffee-270 capitalize text-coffee-70 flex flex-col items-center px-8 py-10 ">
            <Image src={service.img} alt={service.title} />
            {service.title}
          </Card>
        ))}
      </div>
    </section>
  );
};

export default Services;
