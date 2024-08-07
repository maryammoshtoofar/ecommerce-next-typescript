import logo from '@/app/_assets/logo.png';
import Link from 'next/link';
import { HOME } from '@/app/_config/routes';
import Image from 'next/image';
type LogoProps = {
  className: string;
  adminStyle?: string;
};
export const Logo = ({ className, adminStyle }: LogoProps) => {
  return (
    <Link href={HOME} className={`w-12 xl:w-14 ${adminStyle}`}>
      <Image src={logo} alt="logo" className={className} priority={true} />
    </Link>
  );
};
