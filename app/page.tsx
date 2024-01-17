import AboutSlider from '@/app/_components/widgets/sliders/about-slider';
import Services from './_components/widgets/services/services';
import OfferCard from './_components/widgets/offer-card/offer-card';
import ReserveTable from './_components/widgets/reserve-table/reserve-table';
import ProductSlider from './_components/widgets/sliders/products-slider';
import Menu from './_components/widgets/menu/menu';
import BlogPostsSlider from './_components/widgets/sliders/blog-posts-slider';
import TestimonialsSlider from './_components/widgets/sliders/testimonials-slider';
import NewsletterForm from './_components/widgets/newsletter-form/newsletter-form';
import Hero from './_components/widgets/hero/hero';
const Home = () => {
  return (
    <main className="flex w-full flex-col items-center justify-between">
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
