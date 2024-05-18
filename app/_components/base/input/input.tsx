'use client';
import { useState, useEffect } from 'react';

import { InputProps } from '@/app/_types/component-types';

export const Input = (props: InputProps) => {
  const [value, setValue] = useState<string | number>('');
  useEffect(() => {
    if (props.value) {
      setValue(props.value);
    }
  }, [props.value]);
  const handleChange = (val: string) => {
    setValue(val);
  };
  return (
    <div className={`relative w-full ${props.tailwind}`}>
      <span className="absolute left-2 top-3 text-coffee-130">
        {props.component}
      </span>
      <input
        onChange={(e) => handleChange(e.target.value)}
        className="w-full rounded-md py-2 ps-8 placeholder-coffee-150 focus:border focus:outline-none"
        value={value}
        {...props}
      />
    </div>
  );
};
