import { UIComponent } from '@/app/_types/component-types';

export const CardsContainer = (props: UIComponent) => {
  return <div className="grid grid-cols-12 gap-4">{props.children}</div>;
};
