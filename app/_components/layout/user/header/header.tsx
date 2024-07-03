import { NavIconsMenu, NavMenu } from '@/app/_components/layout';

import { BrandName, Logo } from '@/app/_components/base';
import { OrganizationSwitcher } from '@clerk/nextjs';

export const UserHeader = () => {
  return (
    <header className="header">
      <Logo className="logo" />
      <OrganizationSwitcher />
      <BrandName />
      <NavIconsMenu />
      <NavMenu />
    </header>
  );
};
