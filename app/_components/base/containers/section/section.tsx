import { UIComponent } from '@/app/_types/component-types';

export const Section = (props: UIComponent) => {
  return (
    <section className="col-end-13 grid grid-rows-12 gap-12 p-4 sm:col-start-3 sm:row-start-4 sm:row-end-13 lg:col-start-4">
      {props.children}
    </section>
  );
};
