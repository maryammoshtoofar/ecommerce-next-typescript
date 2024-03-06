import { UIComponent } from '@/app/_types/component-types';
type LabelProps = UIComponent & {
  htmlFor: string;
  label: string;
};
const Label = ({ htmlFor, label }: LabelProps) => {
  return (
    <label className="font-bold capitalize text-coffee-230" htmlFor={htmlFor}>
      {label}
    </label>
  );
};

export default Label;
