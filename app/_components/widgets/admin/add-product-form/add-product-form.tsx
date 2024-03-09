'use client';
import Input from '@/app/_components/base/input/input';
import Label from '@/app/_components/base/label/label';
import WYSIWYG from '../wysiwyg/wysiwyg';
import Dropdown from '@/app/_components/base/dropdown/dropdown';
import Flexbox from '@/app/_components/base/containers/flexbox/flexbox';
import UploadBox from '../upload-box/upload-box';
import {
  useGetAllCategoriesQuery,
  useGetSubcategoriesByCategoryQuery,
} from '@/app/lib/redux/features/api/api-slice';
import { useEffect } from 'react';
import { useAppDispatch, useAppSelector } from '@/app/lib/redux/hooks';
import {
  selectCategory,
  setCategories,
} from '@/app/lib/redux/features/categories/categories-slice';
import {
  selectSubcategory,
  setSubcategories,
} from '@/app/lib/redux/features/subcategories/subcategories-slice';
import { skipToken } from '@reduxjs/toolkit/query';
const AddProductForm = () => {
  const dispatch = useAppDispatch();
  const { selectedCategory, allCategories: categories } = useAppSelector(
    (state) => state.categories,
  );
  const { selectedSubcategory, allSubcategories: subcategories } =
    useAppSelector((state) => state.subcategories);

  const { data, error, isLoading } = useGetAllCategoriesQuery('categories');

  const {
    data: subData,
    error: subError,
    isLoading: subIsLoading,
  } = useGetSubcategoriesByCategoryQuery(
    selectedCategory?._id ? selectedCategory._id : skipToken,
  );

  useEffect(() => {
    if (!isLoading && !error && data) dispatch(setCategories(data.categories));
  }, [isLoading, error]);
  useEffect(() => {
    if (selectedCategory && !subError && !subIsLoading && subData) {
      dispatch(setSubcategories(subData.subcategories));
    }
  }, [selectedCategory, subData]);

  return (
    <form className="flex flex-col gap-4">
      <Label htmlFor="title" label="title" />
      <Input type="text" placeholder="Enter Product Title" />
      <Label htmlFor="category" label="category" />

      <Dropdown
        selectOption={selectCategory}
        title={selectedCategory?.title || 'category'}
        items={categories}
      />
      <Label htmlFor="subcategory" label="subcategory" />
      {subcategories && (
        <Dropdown
          selectOption={selectSubcategory}
          title={selectedSubcategory?.title || 'subcategory'}
          items={subcategories}
        />
      )}
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
