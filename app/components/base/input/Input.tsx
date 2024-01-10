import { InputProps } from '@/app/types/types';

const Input = (props: InputProps) => {
  return (
    <div className="relative w-full">
      <span className="absolute left-2 top-3 text-coffee-130">
        {props.component}
      </span>
      <input
        type={props.type}
        placeholder={props.placeholder}
        className="w-full rounded-md py-2 ps-8 placeholder-coffee-150"
      />
    </div>
  );
};
export default Input;
