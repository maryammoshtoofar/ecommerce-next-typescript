import { Title } from '@/app/_components/base';
import { UIComponent } from '@/app/_types/component-types';

type Props = UIComponent & {
  title: string;
};

export const SettingsSection = ({ title, children }: Props) => {
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
