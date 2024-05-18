import { UIComponent } from '@/app/_types/component-types';

export const Title = (props: UIComponent) => {
  return (
    <h1
      className={`py-6 font-dancing text-3xl font-bold capitalize text-coffee-370 ${props.tailwind}`}
    >
      {props.children}
    </h1>
  );
};
