import Input from '@/app/_components/base/input/input';
import Label from '@/app/_components/base/label/label';
import WYSIWYG from '../wysiwyg/wysiwyg';
import Dropdown from '@/app/_components/base/dropdown/dropdown';
import Flexbox from '@/app/_components/base/containers/flexbox/flexbox';
import UploadBox from '../upload-box/upload-box';
import { getAllCategories } from '@/app/_http/categories/categories';
import { getSubcategoriesByCategory } from '@/app/_http/subcategories/subcategories';
const AddProductForm = async () => {
  // const { data } = useGetCategoriesQuery();
  const categories = await getAllCategories();
  const subcategories = await getSubcategoriesByCategory(
    '65e97b2dab0c99e20cd2f9fd',
  );
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
