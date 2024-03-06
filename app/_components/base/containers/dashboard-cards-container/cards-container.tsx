import { UIComponent } from '@/app/_types/component-types';

const Container = (props: UIComponent) => {
  return <div className="grid grid-cols-12 gap-4">{props.children}</div>;
};

export default Container;
