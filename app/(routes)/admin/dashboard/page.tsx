import Container from '@/app/_components/base/containers/dashboard-cards-container/cards-container';
import Card from '@/app/_components/widgets/admin/dashboard-card/dashboard-card';
import SalesChart from '@/app/_components/widgets/admin/sales-chart/sales-chart';
import Title from '@/app/_components/base/admin/section-title/section-title';
import Section from '@/app/_components/base/containers/section/section';
import TrendingProducts from '@/app/_components/widgets/admin/trending-products/trending-products';
import WidgetsContainer from '@/app/_components/base/containers/dashboard-widgets-container/widgets-container';
import { FiShoppingBag } from 'react-icons/fi';
import { FiUser } from 'react-icons/fi';
import { FiShoppingCart } from 'react-icons/fi';
const Dashboard = () => {
  return (
    <Section>
      <Title>dashboard</Title>
      <Container>
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
      </Container>
      <WidgetsContainer>
        <SalesChart />
        <TrendingProducts />
      </WidgetsContainer>
    </Section>
  );
};

export default Dashboard;
