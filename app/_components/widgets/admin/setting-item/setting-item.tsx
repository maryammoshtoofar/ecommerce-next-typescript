import { UIComponent } from '@/app/_types/component-types';

export const SettingItem = ({ component, children }: UIComponent) => {
  return (
    <div className="flex cursor-pointer flex-col items-center font-bold capitalize text-coffee-270 transition-all hover:text-coffee-180">
      <span className="text-4xl">{component}</span>
      <span className="text-sm">{children}</span>
    </div>
  );
};
