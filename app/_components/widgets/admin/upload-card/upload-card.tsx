import { UIComponent } from '@/app/_types/component-types';
import Image, { StaticImageData } from 'next/image';
import { LuTrash } from 'react-icons/lu';
type Props = UIComponent & {
  src: StaticImageData;
  alt: string;
};
const UploadCard = (props: Props) => {
  return (
    <div className="relative flex items-center justify-center rounded-lg bg-white">
      <Image className="w-32 max-w-none" {...props} />
      <span className=" absolute -right-2 -top-2 cursor-pointer rounded-full bg-red-100 p-2 text-xl text-red-500">
        <LuTrash />
      </span>
    </div>
  );
};

export default UploadCard;
