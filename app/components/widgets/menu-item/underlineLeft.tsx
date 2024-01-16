import { UIComponent } from '@/app/types/types';
import Image from 'next/image';
import underlineLeft from '@/public/img/underline-left.png';
const UnderLineLeft = (props: UIComponent) => {
  return <Image src={underlineLeft} alt="underline-left" className="" />;
};
export default UnderLineLeft;
