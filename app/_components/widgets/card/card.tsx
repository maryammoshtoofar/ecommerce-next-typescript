import { UIComponent } from '@/app/_types/component-types';

const Card = (props: UIComponent) => {
  return (
    <article className={`card ${props.tailwind} `} key={props.id}>
      {props.children}
    </article>
  );
};
export default Card;
