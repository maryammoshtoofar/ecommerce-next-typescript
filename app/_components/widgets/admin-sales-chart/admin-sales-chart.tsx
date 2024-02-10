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
type Props = {};

ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Tooltip,
  Filler,
);

const labels = ['9:00 A.M', '12:00 P.M', '4:00 P.M', '8:00 P.M', '12:00 A.M'];
const SalesChart = (props: Props) => {
  const data = {
    labels,
    datasets: [
      {
        data: [65, 59, 80, 81, 56, 55, 40],
        fill: true,
        borderColor: '#977163',
        backgroundColor: ' rgba(229,205,196,0.1)',
        tension: 0.1,
      },
    ],
  };
  return (
    <article>
      {' '}
      <Line data={data} />
    </article>
  );
};

export default SalesChart;
