import { Overlay } from '@/app/_components/base';
import { INVENTORY } from '@/app/_config/routes';
import Link from 'next/link';
import { MdClose } from 'react-icons/md';
import { AddProductForm } from '@/app/_components/widgets';
import { StoreProvider } from '@/app/_components/layout';

type Props = {
  id: string | undefined;
};
export const ProductModal = (props: Props) => {
  return (
    <StoreProvider>
      <Overlay tailwind="items-baseline">
        <div className="flex max-h-full w-full flex-col bg-white p-4 opacity-100 lg:mt-1 lg:w-1/3 lg:rounded-lg">
          <Link href={INVENTORY} className="self-end">
            <MdClose />
          </Link>
          <AddProductForm />
        </div>
      </Overlay>
    </StoreProvider>
  );
};
