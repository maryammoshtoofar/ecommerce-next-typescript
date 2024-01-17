import NavButton from '@/app/_components/layout/user/navigation/nav-button/nav-btn';

const NavMenu = () => {
  return (
    <nav className="nav-menu">
      <NavButton title="Home" />
      <NavButton title="Menu" />
      <NavButton title="Services" />
      <NavButton title="Product" />
      <NavButton title="Blog" />
      <NavButton title="Contact" />
    </nav>
  );
};
export default NavMenu;
