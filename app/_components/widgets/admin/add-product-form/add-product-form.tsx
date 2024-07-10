'use client';

import { useSearchParams } from 'next/navigation';
import { useForm, SubmitHandler } from 'react-hook-form';
import {
  Input,
  Label,
  // Dropdown,
  Flexbox,
  // Button,
} from '@/app/_components/base/';
// import { UploadBox } from '../upload-box';
import {
  useGetAllCategoriesQuery,
  useGetSubcategoriesByCategoryQuery,
  useGetProductByIdQuery,
} from '@/app/lib/redux/features/api/api-slice';
import { useEffect, useState } from 'react';
import { useAppDispatch, useAppSelector } from '@/app/lib/redux/hooks';
import { setCategories } from '@/app/lib/redux/features/categories/categories-slice';
import { selectProduct } from '@/app/lib/redux/features/products/products-slice';
import { setSubcategories } from '@/app/lib/redux/features/subcategories/subcategories-slice';
import { skipToken } from '@reduxjs/toolkit/query';
type Inputs = {
  name: string;
  price: number;
  quantity: number;
};
export const AddProductForm = () => {
  const processForm: SubmitHandler<Inputs> = (data) => setData(data);
  const searchParams = useSearchParams();
  const id = searchParams.get('id');
  const dispatch = useAppDispatch();
  const { selectedCategory, allCategories: categories } = useAppSelector(
    (state) => state.categories,
  );
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
    selectedCategory?._id.toString()
      ? selectedCategory._id.toString()
      : skipToken,
  );

  const { data: prodData } = useGetProductByIdQuery(id!);

  useEffect(() => {
    if (prodData) {
      dispatch(selectProduct(prodData.product));
    }
  }, [prodData]);

  useEffect(() => {
    if (!catIsLoading && !catError && catData)
      dispatch(setCategories(catData.categories));
  }, [catIsLoading, catError, dispatch]);
  useEffect(() => {
    if (selectedCategory && !subError && !subIsLoading && subData) {
      dispatch(setSubcategories(subData.subcategories));
    }
  }, [selectedCategory, subData, dispatch]);

  const [data, setData] = useState<Inputs>();
  console.log(data);
  const {
    register,
    handleSubmit,
    // watch,
    formState: { errors },
  } = useForm<Inputs>({
    defaultValues: {
      name: selectedProduct?.name,
      price: selectedProduct?.price,
      quantity: selectedProduct?.quantity,
    },
  });

  return (
    <form className="flex flex-col gap-4" onSubmit={handleSubmit(processForm)}>
      <Label htmlFor="title" label="title" />
      <Input
        type="text"
        placeholder="Enter Product Title"
        {...(register('name'), { required: 'Name is Required' })}
      />
      {errors.name?.message && (
        <p className="text-sm text-red-400">{errors.name.message}</p>
      )}
      {/* <Label htmlFor="category" label="category" /> */}
      {/* <Dropdown
        selectOption={selectCategory}
        title={
          selectedCategory?.title ||
          selectedProduct?.category.title ||
          'category'
        }
        items={categories}
      /> */}
      {/* <Label htmlFor="subcategory" label="subcategory" /> */}
      {/* {subcategories && (
        <Dropdown
          selectOption={selectSubcategory}
          title={
            selectedSubcategory?.title ||
            selectedProduct?.subcategory.title ||
            'subcategory'
          }
          items={subcategories}
        />
      )} */}
      <Flexbox tailwind="justify-between">
        <div>
          <Label htmlFor="price" label="price" />
          <Input
            type="number"
            placeholder="Enter Price"
            {...(register('price'), { required: 'Price is Required' })}
          />
          {errors.price?.message && (
            <p className="text-sm text-red-400">{errors.price.message}</p>
          )}
        </div>
        <div>
          <Label htmlFor="quantity" label="quantity" />
          <Input
            type="number"
            placeholder="Enter Quantity"
            {...(register('quantity'), { required: 'Quantity is Required' })}
          />
          {errors.quantity?.message && (
            <p className="text-sm text-red-400">{errors.quantity.message}</p>
          )}
        </div>
      </Flexbox>
      {/* <UploadBox images={selectedProduct?.images} /> */}
      <button
        type="submit"
        className="self-center border-none bg-green-500 font-extrabold text-coffee-340"
      >
        Save Product
      </button>
    </form>
  );
};
