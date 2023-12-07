import { TailwindComponent } from '@/app/types/types';

const IconedFooterMenuItem = ({ children, component }: TailwindComponent) => {
  return (
    <li className="flex items-center gap-3">
      {component}
      {children}
    </li>
  );
};
export default IconedFooterMenuItem;
