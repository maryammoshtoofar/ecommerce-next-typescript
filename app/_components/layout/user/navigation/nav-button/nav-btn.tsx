import Link from 'next/link';

type NavButtonProps = {
  title: string;
  active?: boolean;
};
const NavButton = ({ title }: NavButtonProps) => {
  const navLink =
    title === 'home' ? './' : title === 'services' ? '#' + title : title;
  return (
    <Link href={navLink} className="nav-menu-btn capitalize">
      {title}
    </Link>
  );
};
export default NavButton;
