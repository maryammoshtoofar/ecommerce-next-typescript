import Card from '@/app/_components/widgets/admin-dashboard-card/admin-dashboard-card';
import React from 'react';
import { FiShoppingBag } from 'react-icons/fi';
import { FiUser } from 'react-icons/fi';
import { FiShoppingCart } from 'react-icons/fi';
type Props = {};

const Dashboard = (props: Props) => {
  return (
    <section className="col-span-12 row-start-2 w-full sm:col-span-9 ">
      <div className="flex w-full justify-between gap-4">
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
    </section>
  );
};

export default Dashboard;
