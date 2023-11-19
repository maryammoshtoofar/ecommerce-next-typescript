import logo from '@/app/assets/logo.png';
import Image from 'next/image';

const Logo = () => {
  return <Image src={logo} alt="logo" className="w-10" />;
};
export default Logo;
