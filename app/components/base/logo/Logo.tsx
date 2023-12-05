import Image from 'next/image';
import logo from '@/app/assets/logo.png';
type LogoProps = {
  className: string;
};
const Logo = ({ className }: LogoProps) => {
  return <Image src={logo} alt="logo" className={className} />;
};
export default Logo;
