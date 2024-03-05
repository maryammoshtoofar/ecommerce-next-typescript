import { UIComponent } from '@/app/_types/componenet-types';

const Flexbox = (props: UIComponent) => {
  return (
    <div className={`flex items-center justify-center ${props.tailwind}`}>
      {props.children}
    </div>
  );
};

export default Flexbox;
