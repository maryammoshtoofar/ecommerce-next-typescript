import Image from 'next/image';
import logo from '@/app/_assets/logo.png';
import Link from 'next/link';
import { HOME } from '@/app/_config/routes';
type LogoProps = {
  className: string;
  adminStyle?: string;
};
const Logo = ({ className, adminStyle }: LogoProps) => {
  return (
    <Link href={HOME} className={adminStyle}>
      <Image src={logo} alt="logo" className={className} />
    </Link>
  );
};
export default Logo;
