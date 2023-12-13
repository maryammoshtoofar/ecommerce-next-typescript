import { UIComponent } from '@/app/types/types';

const Card = (props: UIComponent) => {
  return (
    <div className={`card ${props.tailwind} `} key={props.id}>
      {props.children}
    </div>
  );
};
export default Card;
