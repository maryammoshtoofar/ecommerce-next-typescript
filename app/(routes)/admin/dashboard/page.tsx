import Card from '@/app/_components/widgets/admin/dashboard-card/dashboard-card';
import SalesChart from '@/app/_components/widgets/admin/sales-chart/sales-chart';
import TrendingProducts from '@/app/_components/widgets/admin/trending-products/trending-products';
import React from 'react';
import { FiShoppingBag } from 'react-icons/fi';
import { FiUser } from 'react-icons/fi';
import { FiShoppingCart } from 'react-icons/fi';
const Dashboard = () => {
  return (
    <section className="col-span-12 row-start-2 grid p-4">
      <div className="grid grid-cols-12 gap-4">
        <Card
          title="total orders"
          percentage={-2.33}
          amount={21375}
          component={<FiShoppingBag />}
          progress={70}
        />
        <Card
          title="new customers"
          percentage={+32.4}
          amount={1012}
          component={<FiUser />}
          progress={65}
        />
        <Card
          title="total sales"
          percentage={+25}
          amount={24254}
          component={<FiShoppingCart />}
          progress={55}
        />
      </div>
      <div className="mt-6 flex flex-col justify-between gap-4 lg:flex-row">
        <SalesChart />
        <TrendingProducts />
      </div>
    </section>
  );
};

export default Dashboard;
