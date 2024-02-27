import { UIComponent } from '@/app/_types/types';

const Row = (props: UIComponent) => {
  return (
    <tr className=" border-coffee-80 bg-coffee-50 capitalize transition-all hover:bg-coffee-30">
      {props.children}
    </tr>
  );
};

export default Row;
