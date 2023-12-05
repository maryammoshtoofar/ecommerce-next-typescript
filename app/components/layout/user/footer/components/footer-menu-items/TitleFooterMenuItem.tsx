
import { UIComponent } from '@/app/types/types';

const TitleFooterMenuItem = ({ children }: UIComponent) => {
  return <li className="text-xl mb-2">{children}</li>;
};
export default TitleFooterMenuItem;
