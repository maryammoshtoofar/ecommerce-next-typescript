import { UIComponent } from '@/app/_types/component-types';

export const FooterMenuItem = ({ children }: UIComponent) => {
  return <li className="cursor-pointer">{children}</li>;
};

