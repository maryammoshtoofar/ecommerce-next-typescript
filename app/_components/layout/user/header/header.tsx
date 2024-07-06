import { NavIconsMenu, NavMenu } from '@/app/_components/layout';

import { BrandName, Logo } from '@/app/_components/base';

export const UserHeader = () => {
  return (
    <header className="header">
      <Logo className="logo" />
      <BrandName />
      <NavIconsMenu />
      <NavMenu />
    </header>
  );
};
