import { ButtonProps } from '@/app/types/types';

const Button = ({
  primary = false,
  label,
  tailwind,
  component,
  ...props
}: ButtonProps) => {
  const mode = primary ? 'btn-primary' : 'btn-secondary';
  return (
    <button
      type="button"
      className={['btn' ,mode, tailwind].join(' ')}
      {...props}
    >
      {label}
      {component}
    </button>
  );
};
export default Button;
