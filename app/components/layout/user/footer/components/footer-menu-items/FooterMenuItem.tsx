import { UIComponent } from '@/app/types/types';

const FooterMenuItem = ({ children }: UIComponent) => {
  return <li className="cursor-pointer">{children}</li>;
};
export default FooterMenuItem;
