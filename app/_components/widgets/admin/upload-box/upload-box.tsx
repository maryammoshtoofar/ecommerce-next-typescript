import { Flexbox, Label } from '@/app/_components/base';
import { BsPlusSquare } from 'react-icons/bs';
import { UploadArea, UploadCard } from '@/app/_components/widgets';

import { BASE_URL, UPLOADS_PATH } from '@/app/_config/routes';

type Props = {
  images?: string[];
};

export const UploadBox = ({ images }: Props) => {
  console.log(images);
  return (
    <Flexbox tailwind="flex-col gap-4 w-full items-stretch">
      <Flexbox tailwind="justify-between">
        <Label htmlFor="images" label="product images" />
        <span className="flex items-center gap-2 text-coffee-170">
          <BsPlusSquare className="cursor-pointer text-2xl" />
          Image from URL
        </span>
      </Flexbox>
      <div className="flex w-full gap-6 overflow-x-auto rounded-lg border-2 border-dashed border-coffee-80 bg-coffee-60 p-6">
        {images &&
          images.map((image) => (
            <UploadCard
              src={`${BASE_URL}${UPLOADS_PATH}/${image}`}
              alt={image}
            />
          ))}
        <UploadArea />
      </div>
    </Flexbox>
  );
};