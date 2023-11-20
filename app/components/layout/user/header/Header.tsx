import NavIconsMenu from '@/app/components/nav-icons-menu/NavIconsMenu';
import Logo from '@/app/components/logo/Logo';
import NavMenu from '@/app/components/nav-menu/NavMenu';

const Header = () => {
  return (
    <header className="grid grid-cols-12 items-baseline pb-2 px-8">
      <Logo className="w-10 col-span-5" />
        <NavIconsMenu />
        <NavMenu />
    </header>
  );
};
export default Header;
