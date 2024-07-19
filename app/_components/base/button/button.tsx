import { ButtonProps } from '@/app/_types/component-types';
import clsx from 'clsx';

export const Button = ({
  mode = 'primary',
  label,
  tailwind,
  component,
  square,
  ...props
}: ButtonProps) => {
  return (
    <button
      type="button"
      className={clsx(
        'md:text-xl; inline-flex items-center justify-center gap-2 border-2 border-coffee-610 px-9 py-2 font-slab text-sm capitalize text-coffee-70',
        tailwind,
        {
          'bg-coffee-600': mode === 'primary',
          'bg-coffee-620': mode === 'secondary',
          'bg-coffee-610': mode === 'tertiary',
        },
        {
          'rounded-[3rem]': !square,
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
