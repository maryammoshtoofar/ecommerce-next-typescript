import Overlay from '@/app/_components/base/overlay/overlay';
import { INVENTORY } from '@/app/_config/routes';
import Link from 'next/link';
import { MdClose } from 'react-icons/md';
import AddProductForm from '../add-product-form/add-product-form';
type Props = {};

const AddProductModal = (props: Props) => {
  return (
    <Overlay>
      <div className="mt-12 flex w-1/3 flex-col rounded-lg bg-white p-4 opacity-100">
        <Link href={INVENTORY} className="self-end">
          <MdClose />
        </Link>
        <AddProductForm />
      </div>
    </Overlay>
  );
};

export default AddProductModal;
