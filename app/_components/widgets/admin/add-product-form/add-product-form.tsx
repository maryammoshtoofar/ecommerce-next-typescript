'use client';
import { useSearchParams } from 'next/navigation';
import Input from '@/app/_components/base/input/input';
import Label from '@/app/_components/base/label/label';
import WYSIWYG from '../wysiwyg/wysiwyg';
import Dropdown from '@/app/_components/base/dropdown/dropdown';
import Flexbox from '@/app/_components/base/containers/flexbox/flexbox';
import UploadBox from '../upload-box/upload-box';
import {
  useGetAllCategoriesQuery,
  useGetSubcategoriesByCategoryQuery,
  useGetProductByIdQuery,
} from '@/app/lib/redux/features/api/api-slice';
import { useEffect } from 'react';
import { useAppDispatch, useAppSelector } from '@/app/lib/redux/hooks';
import {
  selectCategory,
  setCategories,
} from '@/app/lib/redux/features/categories/categories-slice';
import { selectProduct } from '@/app/lib/redux/features/products/products-slice';
import {
  selectSubcategory,
  setSubcategories,
} from '@/app/lib/redux/features/subcategories/subcategories-slice';
import { skipToken } from '@reduxjs/toolkit/query';
const AddProductForm = () => {
  const searchParams = useSearchParams();
  const id = searchParams.get('id');
  const dispatch = useAppDispatch();
  const { selectedCategory, allCategories: categories } = useAppSelector(
    (state) => state.categories,
  );
  const { selectedSubcategory, allSubcategories: subcategories } =
    useAppSelector((state) => state.subcategories);
  const { selectedProduct } = useAppSelector((state) => state.products);

  const {
    data: catData,
    error: catError,
    isLoading: catIsLoading,
  } = useGetAllCategoriesQuery('categories');

  const {
    data: subData,
    error: subError,
    isLoading: subIsLoading,
  } = useGetSubcategoriesByCategoryQuery(
    selectedCategory?._id ? selectedCategory._id : skipToken,
  );

  const { data, error, isLoading } = useGetProductByIdQuery(id!);

  useEffect(() => {
    if (data) {
      dispatch(selectProduct(data.product));
    }
    console.log('data', data);
  }, [data]);

  useEffect(() => {
    if (!catIsLoading && !catError && catData)
      dispatch(setCategories(catData.categories));
  }, [catIsLoading, catError]);
  useEffect(() => {
    if (selectedCategory && !subError && !subIsLoading && subData) {
      dispatch(setSubcategories(subData.subcategories));
    }
  }, [selectedCategory, subData]);

  return (
    <form className="flex flex-col gap-4">
      <Label htmlFor="title" label="title" />
      <Input
        type="text"
        placeholder="Enter Product Title"
        value={selectedProduct?.name}
      />
      <Label htmlFor="category" label="category" />
      <Dropdown
        selectOption={selectCategory}
        title={
          selectedCategory?.title ||
          selectedProduct?.category.title ||
          'category'
        }
        items={categories}
      />
      <Label htmlFor="subcategory" label="subcategory" />
      {subcategories && (
        <Dropdown
          selectOption={selectSubcategory}
          title={
            selectedSubcategory?.title ||
            selectedProduct?.subcategory.title ||
            'subcategory'
          }
          items={subcategories}
        />
      )}
      <Flexbox tailwind="justify-between">
        <div>
          <Label htmlFor="price" label="price" />
          <Input
            type="number"
            placeholder="Enter Price"
            value={selectedProduct?.price}
          />
        </div>
        <div>
          <Label htmlFor="quantity" label="quantity" />
          <Input
            type="number"
            placeholder="Enter Quantity"
            value={selectedProduct?.quantity}
          />
        </div>
      </Flexbox>
      <WYSIWYG data={selectedProduct?.description} />
      <UploadBox images={selectedProduct?.images} />
    </form>
  );
};

export default AddProductForm;
