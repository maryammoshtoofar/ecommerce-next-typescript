import AboutSlider from '@/app/_components/widgets/sliders/about-slider';
import Services from '@/app/_components/widgets/services/services';
import OfferCard from '@/app/_components/widgets/offer-card/offer-card';
import ReserveTable from '@/app/_components/widgets/reserve-table/reserve-table';
import ProductSlider from '@/app/_components/widgets/sliders/products-slider';
import Menu from '@/app/_components/widgets/menu/menu';
import BlogPostsSlider from '@/app/_components/widgets/sliders/blog-posts-slider';
import TestimonialsSlider from '@/app/_components/widgets/sliders/testimonials-slider';
import NewsletterForm from '@/app/_components/widgets/newsletter-form/newsletter-form';
import Hero from '@/app/_components/widgets/hero/hero';
const Home = () => {
  // className=""
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
