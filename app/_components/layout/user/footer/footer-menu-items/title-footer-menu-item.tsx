import { UIComponent } from '@/app/_types/component-types';

export const TitleFooterMenuItem = ({ children }: UIComponent) => {
  return <li className="mb-2 xl:text-xl">{children}</li>;
};
