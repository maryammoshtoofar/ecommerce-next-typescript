import Image from 'next/image';
import footerBg from '@/app/assets/footer-bg.png';
import CoffeGrinderVector from '@/app/assets/Vector.png';
import { FaPinterestSquare, FaLinkedin } from 'react-icons/fa';
import { FaSquareInstagram } from 'react-icons/fa6';
import FooterMenu from '@/app/components/layout/user/footer/footer-menu/FooterMenu';
import FooterCopyRight from '@/app/components/layout/user/footer/footer-copyright/FooterCopyRight';

const Footer = () => {
  return (
    <footer className="mt-24 text-lg text-coffee-20">
      <div className="me-10 flex items-center justify-end gap-2">
        <span>Social Media:</span>
        <FaLinkedin size="1.5rem" />
        <FaPinterestSquare size="1.5rem" />
        <FaSquareInstagram size="1.5rem" />
      </div>
      <div className="relative grid grid-cols-4 items-center gap-3 bg-coffee-300">
        <Image
          src={footerBg}
          alt="footer-background"
          className="absolute h-full w-full"
        />
        <Image
          src={CoffeGrinderVector}
          alt="coffee-grinder"
          className="h-96 w-80 p-6"
        />
        <FooterMenu />
        <FooterCopyRight />
      </div>
    </footer>
  );
};
export default Footer;
