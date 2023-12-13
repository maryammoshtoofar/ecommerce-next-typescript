import Hero from '@/app/components/widgets/hero/Hero';
import AboutSlider from '@/app/components/widgets/sliders/AboutSlider';
import Services from './components/widgets/services/Services';
import OfferCard from './components/widgets/offer-card/OfferCard';
import ReserveTable from './components/widgets/reserve-table/ReserveTable';
import ProductSlider from './components/widgets/sliders/ProductsSlider';

const Home = () => {
  return (
    <main className=" flex flex-col items-center justify-between">
      <Hero />
      <AboutSlider />
      <Services />
      <OfferCard />
      <ReserveTable />
      <ProductSlider />
    </main>
  );
};

export default Home;
