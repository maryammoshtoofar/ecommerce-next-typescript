import { UIComponent } from '@/app/_types/component-types';

export const WidgetsContainer = (props: UIComponent) => {
  return (
    <div className="mt-6 flex flex-col justify-between gap-4 lg:flex-row">
      {props.children}
    </div>
  );
};
