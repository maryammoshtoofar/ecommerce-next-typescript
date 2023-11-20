import { FaLocationDot } from 'react-icons/fa6';
import { FaEnvelope } from 'react-icons/fa';
import { MdOutlinePhoneIphone } from 'react-icons/md';
import { TailwindComponent } from '@/app/types/types';
import FooterMenuItem from '../footer-menu-items/FooterMenuItem';
import IconedFooterMenuItem from '../footer-menu-items/IconedFooterMenuItem';
import TitleFooterMenuItem from '../footer-menu-items/TitleFooterMenuItem';

const FooterMenu = () => {
  return (
    <div className="col-span-3 grid grid-cols-4 text-coffee-20 text-lg w-full items-center pe-5 z-50">
      <ul className="flex flex-col gap-4">
        <TitleFooterMenuItem>About</TitleFooterMenuItem>
        <FooterMenuItem>Our Story</FooterMenuItem>
        <FooterMenuItem>FAQ</FooterMenuItem>
        <FooterMenuItem>Careers</FooterMenuItem>
      </ul>
      <ul className="flex flex-col gap-4">
        <TitleFooterMenuItem>Customer Resources</TitleFooterMenuItem>
        <FooterMenuItem>Menu</FooterMenuItem>
        <FooterMenuItem>Locations</FooterMenuItem>
        <FooterMenuItem>Support</FooterMenuItem>
      </ul>
      <ul className="flex flex-col gap-4">
        <TitleFooterMenuItem>Services</TitleFooterMenuItem>
        <FooterMenuItem>Payment Options</FooterMenuItem>
        <FooterMenuItem>Refunds and Exchanges</FooterMenuItem>
        <FooterMenuItem>Limitation of Liablitiy</FooterMenuItem>
      </ul>
      <ul className="flex flex-col gap-4">
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
