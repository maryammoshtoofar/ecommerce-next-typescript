import { ButtonProps } from '@/app/types/types';

const Button = ({
  mode = 'primary',
  label,
  tailwind,
  component,
  ...props
}: ButtonProps) => {
  const status =
    mode === 'primary'
      ? 'btn-primary'
      : mode === 'secondary'
        ? 'btn-secondary'
        : 'btn-tertiary';
  return (
    <button
      type="button"
      className={['btn', status, tailwind].join(' ')}
      {...props}
    >
      {label}
      {component}
    </button>
  );
};
export default Button;
