import {
  ProductsTable as Table,
  ProductModal,
  DeleteProductModal,
} from '@/app/_components/widgets';
import {
  Title,
  Section,
  Flexbox,
  Button,
  Pagination,
} from '@/app/_components/base';
import Link from 'next/link';
import { getPaginatedProducts } from '@/app/api/actions/actions';

type SearchParamProps = {
  searchParams: {
    query?: string;
    page?: string;
    limit?: number;
    show?: string;
    id?: string;
  };
};

const Page = async ({ searchParams }: SearchParamProps) => {
  const currentPage = Number(searchParams?.page) || 1;
  const limit = Number(searchParams?.limit) || 5;
  const { products, count } = await getPaginatedProducts(currentPage, limit);
  const totalPages = Math.ceil(count / limit);

  const tableHeadings = [
    'image',
    'name',
    'category',
    'subcategory',
    'price',
    'stock',
    'quantity',
    'rating',
    'actions',
  ];

  const show = searchParams?.show;
  const id = searchParams?.id;
  const del = id && !show;

  return (
    <Section>
      <Flexbox tailwind="justify-between flex-col gap-4 smmobile:gap-0 smmobile:flex-row row-span-1">
        <Title>inventory</Title>
        <Link href="?show=true">
          <Button label="add new product" />
        </Link>
      </Flexbox>
      {products && <Table headings={tableHeadings} products={products} />}

      {show && <ProductModal id={id} />}
      {del && <DeleteProductModal id={id} />}
      <div className="pagination flex justify-center">
        <Pagination totalPages={totalPages} />
      </div>
    </Section>
  );
};

export default Page;
