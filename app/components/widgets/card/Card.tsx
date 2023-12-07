import { UIComponent } from "@/app/types/types";


const Card = (props: UIComponent) => {
  return (
    <div className={`card ${props.tailwind} `}>
      {props.children}
    </div>
  );
};
export default Card;
