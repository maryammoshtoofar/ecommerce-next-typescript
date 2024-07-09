import {
  OrdersRow as Row,
  OrdersTable as Table,
} from '@/app/_components/widgets';
import arabica from '@/public/img/thumbnails/arabica.png';
import houseBlend from '@/public/img/thumbnails/house-blend.png';
import robusta from '@/public/img/thumbnails/robusta.png';
import { Title, Section } from '@/app/_components/base';
import { getAllOrders } from '@/app/api/actions/actions';
const Inventory = async () => {
  const tableHeadings = ['ID', 'date', 'user', 'total', 'status', 'actions'];
  const orders = await getAllOrders();
  return (
    <Section>
      <Title>inventory</Title>
      <Table orders={orders} headings={tableHeadings} />
    </Section>
  );
};

export default Inventory;
