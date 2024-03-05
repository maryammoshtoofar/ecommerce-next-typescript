import { UIComponent } from '@/app/_types/componenet-types';

const WidgetsContainer = (props: UIComponent) => {
  return (
    <div className="mt-6 flex flex-col justify-between gap-4 lg:flex-row">
      {props.children}
    </div>
  );
};

export default WidgetsContainer;
