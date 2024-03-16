'use client';
import Overlay from '@/app/_components/base/overlay/overlay';
import { INVENTORY } from '@/app/_config/routes';
import Link from 'next/link';
import { MdClose } from 'react-icons/md';
import Button from '@/app/_components/base/button/button';
import { deleteProductById } from '@/app/_actions/actions';
type Props = {
  id: string;
};

const DeleteProductModal = (props: Props) => {
  console.log(props.id);
  return (
    <Overlay tailwind="items-center">
      <div className="flex w-full flex-col rounded-lg  bg-white p-4 opacity-100 smmobile:w-3/4 sm:w-1/2 md:w-1/3 lg:w-1/4">
        <Link href={INVENTORY} className="self-end">
          <MdClose />
        </Link>
        <div className="flex flex-col items-center justify-center gap-4 capitalize">
          <p className="font-bold text-yellow-600">
            are you sure you want to delete this product?
          </p>
          <div className="flex gap-4 px-6">
            <Button
              onClick={() => deleteProductById(props.id)}
              label="delete"
              tailwind="font-bold bg-red-600"
            />
            <Link href={INVENTORY}>
              <Button
                label="cancel"
                tailwind="font-bold bg-coffee-200 text-coffee-310"
              />
            </Link>
          </div>
        </div>
      </div>
    </Overlay>
  );
};

export default DeleteProductModal;
