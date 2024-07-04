import { UIComponent } from '@/app/_types/component-types';

export const WidgetsContainer = (props: UIComponent) => {
  return (
    <div className="flex flex-col gap-2 lg:flex-row">
      {props.children}
    </div>
  );
};
