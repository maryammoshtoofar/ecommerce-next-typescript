import { OrdersTable as Table } from '@/app/_components/widgets';
import { Title, Section, Pagination } from '@/app/_components/base';
import { getPaginatedOrders } from '@/app/api/actions/actions';

type SearchParamProps = {
  searchParams: {
    query?: string;
    page?: string;
    limit?: number;
    show?: string;
    id?: string;
  };
};

const Inventory = async ({ searchParams }: SearchParamProps) => {
  const show = searchParams?.show;
  const id = searchParams?.id;
  const del = id && !show;
  const tableHeadings = ['ID', 'date', 'user', 'total', 'status', 'actions'];
  const currentPage = Number(searchParams?.page) || 1;
  const limit = Number(searchParams?.limit) || 5;
  const { orders, count } = await getPaginatedOrders(currentPage, limit);
  const totalPages = Math.ceil(count / limit);
  return (
    <Section>
      <Title>orders</Title>
      <Table orders={orders} headings={tableHeadings} />
      <div className="pagination flex justify-center">
        <Pagination totalPages={totalPages} />
      </div>
    </Section>
  );
};

export default Inventory;
