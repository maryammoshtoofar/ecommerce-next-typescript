import Row from '@/app/_components/widgets/admin/tables/products-table/table-row';
import Table from '@/app/_components/widgets/admin/tables/products-table/table';
import Title from '@/app/_components/base/admin/section-title/section-title';
import Section from '@/app/_components/base/containers/section/section';
import Flexbox from '@/app/_components/base/containers/flexbox/flexbox';
import Button from '@/app/_components/base/button/button';
import Link from 'next/link';
import AddProductModal from '@/app/_components/widgets/admin/add-product-modal/add-product-modal';
import DeleteProductModal from '@/app/_components/widgets/admin/delete-product-modal/delete-product-modal';
import { getAllProducts } from '@/app/api/actions/actions';
type SearchParamProps = {
  searchParams: Record<string, string> | null | undefined;
};

const Inventory = async ({ searchParams }: SearchParamProps) => {
  const products = await getAllProducts();
  const show = searchParams?.show;
  const id = searchParams?.id;
  const del = id && !show;
  return (
    <Section>
      <Flexbox tailwind="justify-between">
        <Title>inventory</Title>
        <Link href="?show=true">
          <Button label="add new product" />
        </Link>
      </Flexbox>
      <Table>
        {products.map((product: any) => (
          <Row
            key={product._id}
            id={product._id}
            thumbnail={product.images[0]}
            name={product.name}
            category={product.category.title}
            subcategory={product.subcategory.title}
            stock={product.quantity}
            price={product.price}
            quantity={product.quantity}
            rating={product.rating}
          />
        ))}
      </Table>
      {show && <AddProductModal id={id} />}
      {del && <DeleteProductModal id={id} />}
    </Section>
  );
};

export default Inventory;
