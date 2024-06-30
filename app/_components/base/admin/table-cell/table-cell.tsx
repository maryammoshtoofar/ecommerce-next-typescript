import { Flexbox } from '@/app/_components/base';
import { UIComponent } from '@/app/_types/component-types';
type Props = UIComponent & {
  customContainerStyle?: string;
};
export const Cell = (props: Props) => {
  return (
    <td className="whitespace-nowrap border border-coffee-640 p-1">
      {props.children}
      {/* <Flexbox tailwind={props.customContainerStyle}>{props.children}</Flexbox> */}
    </td>
  );
};
