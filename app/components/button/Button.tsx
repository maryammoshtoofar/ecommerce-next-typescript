type ButtonProps = {
  primary?: boolean;
  label: string;
  onClick?: () => void;
};

const Button = ({ primary = false, label, ...props }: ButtonProps) => {
  const mode = primary ? 'btn-primary' : 'btn-secondary';
  return (
    <button type="button" className={['btn', mode].join(' ')} {...props}>
      {label}
    </button>
  );
};
export default Button;
