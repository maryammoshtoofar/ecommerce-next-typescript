type NavButtonProps = {
  title: string;
  active?: boolean;
};
const NavButton = ({ title }: NavButtonProps) => {
  return (
    <button className="nav-menu-btn">
      <span className="">{title}</span>
    </button>
  );
};
export default NavButton;
