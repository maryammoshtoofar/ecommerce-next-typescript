import NavButton from '@/app/components/layout/user/navigation/nav-button/NavButton';

const NavMenu = () => {
  return (
    <nav className="col-span-6 flex gap-5 justify-between items-center text-xl mx-2">
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
