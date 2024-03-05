import { UIComponent } from '@/app/_types/componenet-types';

const FooterMenuItem = ({ children }: UIComponent) => {
  return <li className="cursor-pointer">{children}</li>;
};
export default FooterMenuItem;
