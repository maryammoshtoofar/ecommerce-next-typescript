import NavIconsMenu from '@/app/components/layout/user/navigation/nav-icons-menu/NavIconsMenu';
import Logo from '@/app/components/base/logo/Logo';
import NavMenu from '@/app/components/layout/user/navigation/nav-menu/NavMenu';

const Header = () => {
  return (
    <header className="header" >
      <Logo className="logo " />
      <NavIconsMenu />
      <NavMenu />
    </header>
  );
};
export default Header;
