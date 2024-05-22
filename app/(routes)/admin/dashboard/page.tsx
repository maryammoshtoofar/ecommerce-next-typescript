import {
  CardsContainer as Container,
  Title,
  Section,
  WidgetsContainer,
} from '@/app/_components/base';
import {
  DashboardCard as Card,
  SalesChart,
  TrendingProducts,
} from '@/app/_components/widgets';
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
