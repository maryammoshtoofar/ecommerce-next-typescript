import { TailwindComponent } from '@/app/types/types';

const FooterMenuItem = ({ children }: TailwindComponent) => {
  return <li className="cursor-pointer">{children}</li>;
};
export default FooterMenuItem;
