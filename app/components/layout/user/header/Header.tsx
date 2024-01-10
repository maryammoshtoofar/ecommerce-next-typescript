import Image from 'next/image';
import NavIconsMenu from '@/app/components/layout/user/navigation/nav-icons-menu/NavIconsMenu';
import Logo from '@/app/components/base/logo/Logo';
import NavMenu from '@/app/components/layout/user/navigation/nav-menu/NavMenu';
import title from '@/app/assets/title.png';
import BrandName from '@/app/components/base/logo/BrandName';

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
