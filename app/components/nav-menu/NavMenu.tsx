import NavButton from '@/app/components/nav-button/NavButton';

const NavMenu = () => {
  return (
    <nav className="justify-self-end flex gap-5 justify-between items-center text-xl">
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
