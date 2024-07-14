import { UIComponent } from '@/app/_types/component-types';

export const Overlay = (props: UIComponent) => {
  return (
    <div
      className={`min-h-screen absolute left-0 top-0 bottom-0 z-50 flex w-full justify-center bg-[rgba(6,4,5,0.5)] ${props.tailwind}`}
    >
      {props.children}
    </div>
  );
};


