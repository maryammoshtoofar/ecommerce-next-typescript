import { UIComponent } from '@/app/_types/componenet-types';

const IconedFooterMenuItem = ({ children, component }: UIComponent) => {
  return (
    <li className="flex items-center gap-3">
      {component}
      {children}
    </li>
  );
};
export default IconedFooterMenuItem;
