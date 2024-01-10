import AboutSlider from '@/app/components/widgets/sliders/AboutSlider';
import Services from './components/widgets/services/Services';
import OfferCard from './components/widgets/offer-card/OfferCard';
import ReserveTable from './components/widgets/reserve-table/ReserveTable';
import ProductSlider from './components/widgets/sliders/ProductsSlider';
import Menu from './components/widgets/menu/Menu';
import BlogPostsSlider from './components/widgets/sliders/BlogPostsSlider';
import TestimonialsSlider from './components/widgets/sliders/testimonialsSlider';
import NewsletterForm from './components/widgets/newsletter-form/NewsletterForm';
const Home = () => {
  return (
    <main className="flex w-full flex-col items-center justify-between">
      <AboutSlider />
      <Services />
      {/*<OfferCard />
      <ReserveTable />
      <ProductSlider />
      <Menu />
      <BlogPostsSlider />
      <TestimonialsSlider />
      <NewsletterForm /> */}
    </main>
  );
};

export default Home;
