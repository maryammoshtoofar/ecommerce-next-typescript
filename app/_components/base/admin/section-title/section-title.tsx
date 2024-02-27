import { UIComponent } from '@/app/_types/types';

const Title = (props: UIComponent) => {
  return (
    <h1 className="py-6 font-dancing text-3xl font-bold capitalize text-coffee-370">
      {props.children}
    </h1>
  );
};

export default Title;
