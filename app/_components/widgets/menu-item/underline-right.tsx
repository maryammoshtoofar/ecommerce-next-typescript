import { UIComponent } from '@/app/_types/types';
import Image from 'next/image';
import underlineRight from '@/public/img/underline-right.png';
const UnderLineRight = (props: UIComponent) => {
  return <Image src={underlineRight} alt="underline-right" className="" />;
};
export default UnderLineRight;