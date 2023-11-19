import NavIconsMenu from '@/app/components/nav-icons-menu/NavIconsMenu';
import Logo from '@/app/components/logo/Logo';
import NavMenu from '@/app/components/nav-menu/NavMenu';

const Header = () => {
  return (
    <header className="grid grid-cols-3 items-center pb-2 px-8">
      <Logo />
      <NavIconsMenu />
      <NavMenu />
    </header>
  );
};
export default Header;
