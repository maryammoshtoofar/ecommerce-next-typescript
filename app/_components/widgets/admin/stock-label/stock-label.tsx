import { UIComponent } from '@/app/_types/component-types';
import clsx from 'clsx';
type Props = UIComponent & {
  stock: boolean;
};
export const StockLabel = ({ stock, children, tailwind }: Props) => {
  return (
    <span
      className={clsx(`rounded-lg text-sm uppercase ${tailwind} `, {
        'text-green-400 ': stock,
        'text-red-500': !stock,
      })}
    >
      {children}
    </span>
  );
};
