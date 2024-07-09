import { OrdersTable as Table } from '@/app/_components/widgets';
import { Title, Section } from '@/app/_components/base';
import { getAllOrders } from '@/app/api/actions/actions';
const Inventory = async () => {
  const tableHeadings = ['ID', 'date', 'user', 'total', 'status', 'actions'];
  const orders = await getAllOrders();
  return (
    <Section>
      <Title>orders</Title>
      <Table orders={orders} headings={tableHeadings} />
    </Section>
  );
};

export default Inventory;
