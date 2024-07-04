import { UIComponent } from '@/app/_types/component-types';

export const Section = (props: UIComponent) => {
  return (
    <section className=" flex flex-col gap-2 p-2 sm:col-start-3 sm:col-end-13 sm:row-start-2 sm:row-end-13 lg:col-start-4">
      {props.children}
    </section>
  );
};
