import Hero from '@/app/components/widgets/hero/Hero';
import Slider from '@/app/components/widgets/slider/Slider';
import Services from './components/widgets/services/Services';
import OfferCard from './components/widgets/offer-card/OfferCard';
import ReserveTable from './components/widgets/reserve-table/ReserveTable';

const Home = () => {
  return (
    <main className=" flex flex-col items-center justify-between">
      <Hero />
      <Slider />
      <Services />
      <OfferCard />
      <ReserveTable />
    </main>
  );
};

export default Home;
