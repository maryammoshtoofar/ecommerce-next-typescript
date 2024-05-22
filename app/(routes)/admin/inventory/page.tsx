import {
  ProductsRow as Row,
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
      {show && <ProductModal id={id} />}
      {del && <DeleteProductModal id={id} />}
    </Section>
  );
};

export default Inventory;
