import { UIComponent } from '@/app/_types/component-types';

export const Card = (props: UIComponent) => {
  return (
    <article className={`card ${props.tailwind} `} key={props.id}>
      {props.children}
    </article>
  );
};
