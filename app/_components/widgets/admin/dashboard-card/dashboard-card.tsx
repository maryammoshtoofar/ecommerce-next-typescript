import { numberSeparator } from '@/app/_utils/utils';
import { UIComponent } from '@/app/_types/component-types';
import clsx from 'clsx';

type Props = UIComponent & {
  title: string;
  percentage: number;
  amount: number;
  progress: number;
};

export const DashboardCard = ({
  title,
  component,
  percentage,
  amount,
  progress,
}: Props) => {
  return (
    <article className="col-span-full flex  flex-col gap-6 rounded-lg bg-coffee-10 p-4 text-coffee-190 sm:col-span-6 md:col-span-4">
      <div className="flex items-center gap-2">
        <span className="rounded-lg bg-coffee-640 p-4 text-2xl text-slate-600">
          {component}
        </span>
        <div>
          <h2 className="text-xl capitalize">{title}</h2>
          <span
            className={clsx(' font-bold', {
              'text-green-500': percentage > 0,
              'text-red-600': percentage < 0,
            })}
          >
            {percentage > 0 && '+'}
            {percentage}%
          </span>
        </div>
      </div>
      <div className="flex w-full items-center gap-4">
        <span className="text-4xl ">{numberSeparator(amount)}</span>
        <div className="h-2.5 w-full rounded-full bg-gray-200 dark:bg-coffee-100">
          <div
            className={`h-2.5 rounded-full bg-coffee-200`}
            style={{ width: `${progress}%` }}
          ></div>
        </div>
      </div>
    </article>
  );
};
