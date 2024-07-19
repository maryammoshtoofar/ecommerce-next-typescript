import { Title } from '@/app/_components/base';
import { getPaginatedProducts } from '@/app/api/actions/actions';
import ProductCard from '@/app/_components/widgets/card/product-card';

const Products = async () => {

  const data = await getPaginatedProducts(1);

  return (
    <section className="relative flex min-h-screen flex-col flex-wrap items-center justify-center gap-6 bg-coffee-470 px-4 pt-32">
      <Title tailwind="text-coffee-70">All Products</Title>
      <div className="grid w-full flex-wrap gap-2 py-8 sm:grid-cols-2 sm:justify-center md:grid-cols-3 lg:grid-cols-4">
        {data.products.map((product) => {
          return <ProductCard key={product.id} product={product} />;
        })}
      </div>
    </section>
  );
};

export default Products;
