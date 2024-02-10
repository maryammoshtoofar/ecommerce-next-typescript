import Card from '@/app/_components/widgets/admin-dashboard-card/admin-dashboard-card';
import SalesChart from '@/app/_components/widgets/admin-sales-chart/admin-sales-chart';
import React from 'react';
import { FiShoppingBag } from 'react-icons/fi';
import { FiUser } from 'react-icons/fi';
import { FiShoppingCart } from 'react-icons/fi';
const Dashboard = () => {
  return (
    <section className="col-span-12 row-start-2 w-full p-4 grid ">
      <div className="grid w-full grid-cols-12 gap-4">
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
      <SalesChart />
    </section>
  );
};

export default Dashboard;
