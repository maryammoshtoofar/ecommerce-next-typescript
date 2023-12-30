import { InputProps } from '@/app/types/types';


const Input = (props: InputProps) => {
  return (
    <div className="relative w-full">
      <span className="absolute top-3 left-2 text-coffee-130"> {props.component}</span>
      <input
        type={props.type}
        placeholder={props.placeholder}
        className="ps-8 placeholder-coffee-150 w-full rounded-md py-2"
      />
    </div>
  );
};
export default Input;
