import Image from 'next/image';
import footerBg from '@/app/assets/footer-bg.png';
import CoffeGrinderVector from '@/app/assets/Vector.png';
import { FaPinterestSquare, FaLinkedin } from 'react-icons/fa';
import { FaSquareInstagram } from 'react-icons/fa6';
import FooterMenu from '@/app/components/footer-menu/FooterMenu';
import FooterCopyRight from '@/app/components/footer-copyright/FooterCopyRight';

const Footer = () => {
  return (
    <footer className="text-coffee-20 text-lg">
      <div className="flex gap-2 justify-end items-center me-10">
        <span>Social Media:</span>
        <FaLinkedin size="1.5rem" />
        <FaPinterestSquare size="1.5rem" />
        <FaSquareInstagram size="1.5rem" />
      </div>
      <div className="relative grid grid-cols-4 gap-3 bg-coffee-300 items-center">
        <Image
          src={footerBg}
          alt="footer-background"
          className="absolute h-full w-full"
        />
        <Image
          src={CoffeGrinderVector}
          alt="coffee-grinder"
          className="w-80 h-96 p-6"
        />
        <FooterMenu />
        <FooterCopyRight />
      </div>
    </footer>
  );
};
export default Footer;
