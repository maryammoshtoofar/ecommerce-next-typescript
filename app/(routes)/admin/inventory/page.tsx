import {
  ProductsTable as Table,
  ProductModal,
  DeleteProductModal,
} from '@/app/_components/widgets';
import { Title, Section, Flexbox, Button } from '@/app/_components/base';
import Link from 'next/link';
import { getAllProducts } from '@/app/api/actions/actions';
type SearchParamProps = {
  searchParams: Record<string, string> | null | undefined;
};

const Inventory = async ({ searchParams }: SearchParamProps) => {
  const products = await getAllProducts();
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
      <Table headings={tableHeadings} products={products} />
      {show && <ProductModal id={id} />}
      {del && <DeleteProductModal id={id} />}
    </Section>
  );
};

export default Inventory;
