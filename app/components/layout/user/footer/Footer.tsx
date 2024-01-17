import Image from 'next/image';
import footerBg from '@/app/assets/footer-bg.png';
import CoffeGrinderVector from '@/app/assets/Vector.png';
import { FaPinterestSquare, FaLinkedin } from 'react-icons/fa';
import { FaSquareInstagram } from 'react-icons/fa6';
import FooterMenu from '@/app/components/layout/user/footer/footer-menu/FooterMenu';
import FooterCopyRight from '@/app/components/layout/user/footer/footer-copyright/FooterCopyRight';

const Footer = () => {
  return (
    <footer className="footer">
      <div className="social-media-links">
        <span>Social Media:</span>
        <FaLinkedin size="1.5rem" />
        <FaPinterestSquare size="1.5rem" />
        <FaSquareInstagram size="1.5rem" />
      </div>
      <div className="footer-menu-container">
        <Image
          src={footerBg}
          alt="footer-background"
          className="absolute h-full w-full"
        />
        <Image
          src={CoffeGrinderVector}
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
