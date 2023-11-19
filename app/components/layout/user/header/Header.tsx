import NavButton from '@/app/components/nav-button/NavButton';

const Header = () => {
  return (
    <div className="my-class">
      <NavButton>Home</NavButton>
      <NavButton>Menu</NavButton>
      <NavButton>Services</NavButton>
      <NavButton>Product</NavButton>
      <NavButton>Blog</NavButton>
      <NavButton>Contact</NavButton>
    </div>
  );
};
export default Header;
