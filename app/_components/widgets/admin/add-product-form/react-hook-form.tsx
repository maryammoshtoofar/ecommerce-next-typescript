'use client';

import { useState } from 'react';
import { useForm, SubmitHandler } from 'react-hook-form';
import { Input, Label, Flexbox, Button } from '@/app/_components/base/';
type Inputs = {
  name: string;
  price: string;
  quantity: string;
};
export const ReactHookForm = () => {
  const [data, setData] = useState<Inputs>();

  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm<Inputs>({
    defaultValues: {
      name: '',
      price: '',
      quantity: '',
    },
  });
  const processForm: SubmitHandler<Inputs> = (data) => setData(data);

  return (
    <form className="flex flex-col gap-4" onSubmit={handleSubmit(processForm)}>
      <Label htmlFor="title" label="title" />
      <Input
        type="text"
        placeholder="Enter Product Title"
        {...(register('name'), { required: 'Name is Required' })}
      />
      {errors.name?.message && <p className="text-sm text-red-400"></p>}
      <Flexbox tailwind="justify-between">
        <div>
          <Label htmlFor="price" label="price" />
          <Input
            type="number"
            placeholder="Enter Price"
            {...(register('price'), { required: 'Price is Required' })}
          />
          {errors.price?.message && <p className="text-sm text-red-400"></p>}
        </div>
        <div>
          <Label htmlFor="quantity" label="quantity" />
          <Input
            type="number"
            placeholder="Enter Quantity"
            {...(register('quantity'), { required: 'Quantity is Required' })}
          />
          {errors.quantity?.message && <p className="text-sm text-red-400"></p>}
        </div>
      </Flexbox>
      <Button
        label="save product"
        tailwind="bg-green-500 font-extrabold text-coffee-340 border-none self-center"
      />
    </form>
  );
};
