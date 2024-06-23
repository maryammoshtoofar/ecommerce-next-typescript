import {
  ProductsRow as Row,
  ProductsTable as Table,
  ProductModal,
  DeleteProductModal,
} from '@/app/_components/widgets';
import { Title, Section, Flexbox, Button } from '@/app/_components/base';
import Link from 'next/link';
import {
  getAllProducts,
  getCategoryTitleById,
  getSubcategoryTitleById,
} from '@/app/api/actions/actions';
import { ProductI } from '@/app/_types/data-types';
type SearchParamProps = {
  searchParams: Record<string, string> | null | undefined;
};

const Inventory = async ({ searchParams }: SearchParamProps) => {
  const products = await getAllProducts();
  console.log(products);
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
      <Table>
        {products.map(async (product: ProductI) => {
          const category = await getCategoryTitleById(product.category);
          const subcategory = await getSubcategoryTitleById(
            product.subcategory,
          );

          console.log('caaat', category);
          console.log('caaat', subcategory);
          return (
            <Row
              key={product._id}
              id={product._id}
              thumbnail={product.images[0]}
              name={product.name}
              category={category}
              subcategory={subcategory}
              stock={product.quantity ? true : false}
              price={product.price}
              quantity={product.quantity}
              rating={product.rating}
            />
          );
        })}
      </Table>
      {show && <ProductModal id={id} />}
      {del && <DeleteProductModal id={id} />}
    </Section>
  );
};

export default Inventory;
