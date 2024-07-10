import { FaLocationDot } from 'react-icons/fa6';
import { FaEnvelope } from 'react-icons/fa';
import { MdOutlinePhoneIphone } from 'react-icons/md';
import {
  FooterMenuItem,
  IconFooterMenuItem,
  TitleFooterMenuItem,
} from '@/app/_components/layout';

// import {
//   CAREERS,
//   CONTACT,
//   FAQ,
//   LOCATIONS,
//   MENU,
//   STORY,
// } from '@/app/_config/routes';
import Link from 'next/link';

export const FooterMenu = () => {
  return (
    <div className="footer-menu">
      <ul className="footer-menu-col-1">
        <TitleFooterMenuItem>About</TitleFooterMenuItem>
        <FooterMenuItem>
          <Link href={'#'}>Our Story</Link>
        </FooterMenuItem>
        <FooterMenuItem>
          <Link href={'#'}>FAQ</Link>
        </FooterMenuItem>
        <FooterMenuItem>
          <Link href={'#'}>Careers</Link>
        </FooterMenuItem>
      </ul>
      <ul className="footer-menu-col-1">
        <TitleFooterMenuItem>
          <span className="hidden lg:inline">Customer</span> Resources
        </TitleFooterMenuItem>
        <FooterMenuItem>
          <Link href={'#'}>Menu</Link>
        </FooterMenuItem>
        <FooterMenuItem>
          <Link href={'#'}>Locations</Link>
        </FooterMenuItem>
        <FooterMenuItem>
          <Link href={'#'}>Support</Link>
        </FooterMenuItem>
      </ul>
      <ul className="footer-menu-col-2">
        <TitleFooterMenuItem>Services</TitleFooterMenuItem>
        <FooterMenuItem>Payment Options</FooterMenuItem>
        <FooterMenuItem>
          <span className="hidden lg:inline">Refunds and Exchanges</span>
        </FooterMenuItem>
        <FooterMenuItem>
          <span className="hidden lg:inline">Limitation of </span>
          Liability
        </FooterMenuItem>
      </ul>
      <ul className="footer-menu-col-3">
        <IconFooterMenuItem component={<FaLocationDot />}>
          12 Jhon Ave - NYC
        </IconFooterMenuItem>
        <IconFooterMenuItem component={<FaEnvelope />}>
          elizacoffee@coffee.com
        </IconFooterMenuItem>
        <IconFooterMenuItem component={<MdOutlinePhoneIphone />}>
          +1-222-34-eliza
        </IconFooterMenuItem>
      </ul>
    </div>
  );
};
