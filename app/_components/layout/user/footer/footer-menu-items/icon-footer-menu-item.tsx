import { UIComponent } from '@/app/_types/component-types';

export const IconFooterMenuItem = ({ children, component }: UIComponent) => {
  return (
    <li className="flex items-center gap-3">
      {component}
      {children}
    </li>
  );
};
