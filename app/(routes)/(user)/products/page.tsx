import { Pagination, Title } from '@/app/_components/base';
import { getPaginatedProducts } from '@/app/api/actions/actions';
import ProductCard from '@/app/_components/widgets/card/product-card';

type SearchParamProps = {
  searchParams: {
    query?: string;
    page?: string;
    limit?: number;
  };
};

const Page = async ({ searchParams }: SearchParamProps) => {
  const currentPage = Number(searchParams?.page) || 1;
  const limit = Number(searchParams?.limit) || 5;
  const { products, count } = await getPaginatedProducts(currentPage, limit);
  const totalPages = Math.ceil(count / limit);

  return (
    <section className="relative flex min-h-screen flex-col flex-wrap items-center justify-center gap-6 bg-coffee-470 px-4 pt-32">
      <Title tailwind="text-coffee-70">All Products</Title>
      <div className="grid w-full flex-wrap gap-2 py-8 sm:grid-cols-2 sm:justify-center md:grid-cols-3 lg:grid-cols-4">
        {products.map((product) => {
          return <ProductCard key={product.id} product={product} />;
        })}
      </div>
      <div className="pagination flex justify-center">
        <Pagination totalPages={totalPages} />
      </div>
    </section>
  );
};

export default Page;
