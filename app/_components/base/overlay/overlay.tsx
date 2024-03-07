import { UIComponent } from '@/app/_types/component-types';

const Overlay = (props: UIComponent) => {
  return (
    <div className="absolute left-0 top-0 z-50 flex h-full w-full items-baseline justify-center bg-[rgba(6,4,5,0.5)]">
      {props.children}
    </div>
  );
};

export default Overlay;