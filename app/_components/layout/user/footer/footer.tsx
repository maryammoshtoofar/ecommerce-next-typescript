import Image from 'next/image';
import footerBg from '@/app/_assets/footer-bg.png';
import CoffeeGrinderVector from '@/app/_assets/Vector.png';
import { FaPinterestSquare, FaLinkedin } from 'react-icons/fa';
import { FaSquareInstagram } from 'react-icons/fa6';
import FooterMenu from '@/app/_components/layout/user/footer/footer-menu/footer-menu';
import FooterCopyRight from '@/app/_components/layout/user/footer/footer-copyright/footer-copyright';

const Footer = () => {
  return (
    <footer className="footer">
      <div className="social-media-links">
        <span>Social Media:</span>
        <FaLinkedin size="1.5rem" className="cursor-pointer" />
        <FaPinterestSquare size="1.5rem" className="cursor-pointer" />
        <FaSquareInstagram size="1.5rem" className="cursor-pointer" />
      </div>
      <div className="footer-menu-container">
        <Image
          src={footerBg}
          alt="footer-background"
          className="absolute h-full w-full"
        />
        <Image
          src={CoffeeGrinderVector}
          alt="coffee-grinder"
          className="max-w-full p-6"
        />
        <FooterMenu />
        <FooterCopyRight />
      </div>
    </footer>
  );
};
export default Footer;
