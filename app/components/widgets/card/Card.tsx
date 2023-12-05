type CardProps = {
  children: React.ReactNode;
  tailwind: string;
};

const Card = (props: CardProps) => {
  return (
    <div className={`card gradient-border ${props.tailwind} `} {...props}>
      {props.children}
    </div>
  );
};
export default Card;
