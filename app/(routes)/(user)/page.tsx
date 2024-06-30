import {
  OfferCard,
  ReserveTable,
  ProductSlider,
  Menu,
  BlogPostsSlider,
  TestimonialsSlider,
  NewsletterForm,
  Hero,
  Services,
  AboutSlider,
} from '@/app/_components/widgets';

const Home = () => {
  return (
    <main className="home-glow flex w-full flex-col items-center justify-between bg-coffee-470">
      <Hero />
      <AboutSlider />
      <Services />
      <OfferCard />
      <ReserveTable />
      <ProductSlider />
      <Menu />
      <BlogPostsSlider />
      <TestimonialsSlider />
      <NewsletterForm />
    </main>
  );
};

export default Home;
