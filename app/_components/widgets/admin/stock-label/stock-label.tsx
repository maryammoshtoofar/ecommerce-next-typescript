import { UIComponent } from '@/app/_types/types';
const StockLabel = (props: UIComponent) => {
  return (
    <span className={`uppercase rounded-lg text-sm ${props.tailwind} `}>
      {props.children}
    </span>
  );
};

export default StockLabel;
