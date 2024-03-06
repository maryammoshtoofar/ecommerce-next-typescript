import { UIComponent } from '@/app/_types/component-types';

const IconedFooterMenuItem = ({ children, component }: UIComponent) => {
  return (
    <li className="flex items-center gap-3">
      {component}
      {children}
    </li>
  );
};
export default IconedFooterMenuItem;
