import { OrdersTable as Table } from '@/app/_components/widgets';
import { Title, Section } from '@/app/_components/base';
import { getAllOrders } from '@/app/api/actions/actions';

type SearchParamProps = {
  searchParams: Record<string, string> | null | undefined;
};

const Inventory = async ({ searchParams }: SearchParamProps) => {
  const show = searchParams?.show;
  const id = searchParams?.id;
  const del = id && !show;
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
