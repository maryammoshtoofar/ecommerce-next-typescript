import { UIComponent } from '@/app/_types/component-types';

export const Flexbox = (props: UIComponent) => {
  return (
    <div className={`flex items-center justify-center ${props.tailwind}`}>
      {props.children}
    </div>
  );
};
