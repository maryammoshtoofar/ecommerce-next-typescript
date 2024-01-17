import { UIComponent } from '@/app/types/types';

const TitleFooterMenuItem = ({ children }: UIComponent) => {
  return <li className="mb-2 xl:text-xl">{children}</li>;
};
export default TitleFooterMenuItem;
