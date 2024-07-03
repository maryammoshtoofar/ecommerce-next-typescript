import { Title } from '@/app/_components/base';
import { getAllProducts } from '@/app/api/actions/actions';
import ProductCard from '@/app/_components/widgets/card/product-card';

const Products = async () => {
  const products = await getAllProducts();

  return (
    <section className="relative flex flex-wrap justify-center gap-4 bg-coffee-470 px-4 pt-32">
      <Title tailwind="text-coffee-70 absolute top-12">All Products</Title>
      {products.map((product) => {
        return <ProductCard key={product.id} product={product} />;
      })}
    </section>
  );
};

export default Products;
