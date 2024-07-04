import { UIComponent } from '@/app/_types/component-types';

export const CardsContainer = (props: UIComponent) => {
  return (
    <div className="flex flex-col gap-2 md:flex-row">
      {props.children}
    </div>
  );
};
