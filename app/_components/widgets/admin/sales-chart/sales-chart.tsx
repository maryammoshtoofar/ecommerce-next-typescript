'use client';
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Tooltip,
  Filler,
  // @ts-expect-error
} from 'chart.js';
// @ts-expect-error
import { Line } from 'react-chartjs-2';

ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Tooltip,
  Filler,
);

const labels = ['9:00 A.M', '12:00 P.M', '4:00 P.M', '8:00 P.M', '12:00 A.M'];

export const SalesChart = () => {
  const data = {
    labels,
    datasets: [
      {
        data: [65, 59, 80, 81, 56, 55, 40],
        fill: true,
        borderColor: '#977163',
        backgroundColor: ' rgba(229,205,196,0.1)',
        tension: 0.01,
      },
    ],
  };
  return (
    <article className="flex flex-col justify-center rounded-lg bg-coffee-10 p-4 lg:w-2/3">
      <div className="flex w-full items-baseline justify-between py-1">
        <h2 className="text-base font-bold capitalize text-coffee-230">
          Sales Analytics
        </h2>
        <span className="cursor-pointer text-sm font-bold uppercase text-coffee-190">
          See all
        </span>
      </div>
      <Line data={data} />
    </article>
  );
};
