import Flexbox from '@/app/_components/base/containers/flexbox/flexbox';
import { UIComponent } from '@/app/_types/types';
type Props = UIComponent & {
  customContainerStyle?: string;
};
const Cell = (props: Props) => {
  return (
    <td className="whitespace-nowrap border border-coffee-640 p-1">
      <Flexbox tailwind={props.customContainerStyle}>{props.children}</Flexbox>
    </td>
  );
};

export default Cell;
