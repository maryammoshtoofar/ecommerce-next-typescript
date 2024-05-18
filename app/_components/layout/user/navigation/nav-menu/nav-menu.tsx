import { NavButton } from '@/app/_components/layout';

export const NavMenu = () => {
  return (
    <nav className="nav-menu">
      <NavButton title="home" />
      <NavButton title="menu" />
      <NavButton title="services" />
      <NavButton title="products" />
      <NavButton title="blog" />
      <NavButton title="contact" />
    </nav>
  );
};
