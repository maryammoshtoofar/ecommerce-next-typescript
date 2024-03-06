'use client';
import Input from '@/app/_components/base/input/input';
import Label from '@/app/_components/base/label/label';
import WYSIWYG from '../wysiwyg/wysiwyg';
import Dropdown from '@/app/_components/base/dropdown/dropdown';
import Flexbox from '@/app/_components/base/containers/flexbox/flexbox';
import UploadBox from '../upload-box/upload-box';

const AddProductForm = () => {
  const categories = ['arabica', 'robusta', 'blend'];
  const subcategories = ['latte', 'espresso', 'cappuccino'];
  return (
    <form className="flex flex-col gap-4">
      <Label htmlFor="title" label="title" />
      <Input type="text" placeholder="Enter Product Title" />
      <Label htmlFor="category" label="category" />
      <Dropdown title="category" items={categories} />
      <Label htmlFor="subcategory" label="subcategory" />
      <Dropdown title="subcategory" items={subcategories} />
      <Flexbox tailwind="justify-between">
        <div>
          <Label htmlFor="price" label="price" />
          <Input type="number" placeholder="Enter Product Price" />
        </div>
        <div>
          <Label htmlFor="quantity" label="quantity" />
          <Input type="number" placeholder="Enter Product Quantity" />
        </div>
      </Flexbox>
      <WYSIWYG />
      <UploadBox />
    </form>
  );
};

export default AddProductForm;
