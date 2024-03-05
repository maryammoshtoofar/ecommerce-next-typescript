import { ButtonProps } from '@/app/_types/componenet-types';
import clsx from 'clsx';

const Button = ({
  mode = 'primary',
  label,
  tailwind,
  component,
  ...props
}: ButtonProps) => {
  return (
    <button
      type="button"
      className={clsx(
        'md:text-xl; inline-flex items-center justify-center gap-2 rounded-[3rem] border-2 border-coffee-610 px-9 py-2  font-slab text-sm capitalize text-coffee-70',
        {
          'bg-coffee-600': mode === 'primary',
          'bg-coffee-620': mode === 'secondary',
          'bg-coffee-610': mode === 'tertiary',
        },
        tailwind,
      )}
      {...props}
    >
      {label}
      {component}
    </button>
  );
};
export default Button;
