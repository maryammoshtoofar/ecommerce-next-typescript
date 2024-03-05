import Image from 'next/image';
import { UIComponent } from '@/app/_types/componenet-types';
import { services } from '@/app/_lib/services';
import Card from '../card/card';
import Bean2 from '@/app/_components/base/wandering-coffee-beans/bean2';

const Services = (props: UIComponent) => {
  return (
    <section className="mb-6 flex flex-col items-center gap-12" id="services">
      {/* <Bean2 tailwind="absolute -right-28 bottom-0 bg-red-600" /> */}
      <h1 className="services-title">services</h1>
      <div className="services-container">
        {services.map((service) => (
          <Card key={service.id} tailwind="services-card">
            <Image src={service.img} alt={service.title} />
            {service.title}
          </Card>
        ))}
      </div>
    </section>
  );
};

export default Services;
