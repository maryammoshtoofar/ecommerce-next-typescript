import { UIComponent } from '@/app/_types/component-types';

export const Section = (props: UIComponent) => {
  return (
    <section className="col-span-12 row-start-2 grid p-4">
      {props.children}
    </section>
  );
};
