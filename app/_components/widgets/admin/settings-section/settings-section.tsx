import Title from '@/app/_components/base/admin/section-title/section-title';
import { UIComponent } from '@/app/_types/component-types';
import React from 'react';

type Props = UIComponent & {
  title: string;
};

const SettingsSection = ({ title, children }: Props) => {
  return (
    <>
      <Title tailwind="text-xl font-slab text-coffee-270">{title}</Title>
      <div className="flex flex-wrap items-center justify-start gap-12 py-2 ">
        {children}
      </div>
      <hr className="border border-coffee-600" />
    </>
  );
};

export default SettingsSection;
