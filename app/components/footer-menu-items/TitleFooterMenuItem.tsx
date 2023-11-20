
import { TailwindComponent } from '@/app/types/types';

const TitleFooterMenuItem = ({ children }: TailwindComponent) => {
  return <li className="text-xl mb-2">{children}</li>;
};
export default TitleFooterMenuItem;
