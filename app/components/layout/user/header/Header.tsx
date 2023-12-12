import NavIconsMenu from '@/app/components/layout/user/navigation/nav-icons-menu/NavIconsMenu';
import Logo from '@/app/components/base/logo/Logo';
import NavMenu from '@/app/components/layout/user/navigation/nav-menu/NavMenu';

const Header = () => {
  return (
    <header className="grid grid-cols-12 items-center pb-2 px-8 bg-transparent">
      <Logo className="w-12 col-span-6" />
      <NavIconsMenu />
      <NavMenu />
    </header>
  );
};
export default Header;
