import { UIComponent } from '@/app/_types/componenet-types';

const Section = (props: UIComponent) => {
  return (
    <section className="col-span-12 row-start-2 grid p-4">
      {props.children}
    </section>
  );
};

export default Section;
