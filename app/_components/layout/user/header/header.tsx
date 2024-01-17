import Image from 'next/image';
import NavIconsMenu from '@/app/_components/layout/user/navigation/nav-icons-menu/nav-icons-menu';
import Logo from '@/app/_components/base/logo/logo';
import NavMenu from '@/app/_components/layout/user/navigation/nav-menu/nav-menu';
import title from '@/app/assets/title.png';
import BrandName from '@/app/_components/base/logo/brand-name';

const Header = () => {
  return (
    <header className="header">
      <Logo className="logo" />
      <BrandName />
      <NavIconsMenu />
      <NavMenu />
    </header>
  );
};
export default Header;
