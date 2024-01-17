import { FaLocationDot } from 'react-icons/fa6';
import { FaEnvelope } from 'react-icons/fa';
import { MdOutlinePhoneIphone } from 'react-icons/md';
import FooterMenuItem from '../footer-menu-items/FooterMenuItem';
import IconedFooterMenuItem from '../footer-menu-items/IconedFooterMenuItem';
import TitleFooterMenuItem from '../footer-menu-items/TitleFooterMenuItem';

const FooterMenu = () => {
  return (
    <div className="footer-menu">
      <ul className="footer-menu-col-1">
        <TitleFooterMenuItem>About</TitleFooterMenuItem>
        <FooterMenuItem>Our Story</FooterMenuItem>
        <FooterMenuItem>FAQ</FooterMenuItem>
        <FooterMenuItem>Careers</FooterMenuItem>
      </ul>
      <ul className="footer-menu-col-1">
        <TitleFooterMenuItem>
          <span className="hidden lg:inline">Customer</span> Resources
        </TitleFooterMenuItem>
        <FooterMenuItem>Menu</FooterMenuItem>
        <FooterMenuItem>Locations</FooterMenuItem>
        <FooterMenuItem>Support</FooterMenuItem>
      </ul>
      <ul className="footer-menu-col-2">
        <TitleFooterMenuItem>Services</TitleFooterMenuItem>
        <FooterMenuItem>Payment Options</FooterMenuItem>
        <FooterMenuItem>
          <span className="hidden lg:inline">Refunds and</span>
          Exchanges
        </FooterMenuItem>
        <FooterMenuItem>
          <span className="hidden lg:inline">Limitation of</span>
          Liablitiy
        </FooterMenuItem>
      </ul>
      <ul className="footer-menu-col-3">
        <IconedFooterMenuItem component={<FaLocationDot />}>
          12 Jhon Ave - NYC
        </IconedFooterMenuItem>
        <IconedFooterMenuItem component={<FaEnvelope />}>
          elizacoffee@coffee.com
        </IconedFooterMenuItem>
        <IconedFooterMenuItem component={<MdOutlinePhoneIphone />}>
          +1-222-34-eliza
        </IconedFooterMenuItem>
      </ul>
    </div>
  );
};
export default FooterMenu;
