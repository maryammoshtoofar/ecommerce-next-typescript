import { UIComponent } from '@/app/_types/component-types';

export const Section = (props: UIComponent) => {
  return (
    <section className="grid p-4 sm:col-start-4 col-end-13 sm:row-start-4 row-end-13">
      {props.children}
    </section>
  );
};
