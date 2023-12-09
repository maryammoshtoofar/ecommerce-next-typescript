import Hero from '@/app/components/widgets/hero/Hero';
import Slider from '@/app/components/widgets/slider/Slider';
import Services from './components/widgets/services/Services';

const Home = () => {
  return (
    <main className=" flex flex-col items-center justify-between">
      <Hero />
      <Slider />
      <Services />
    </main>
  );
};

export default Home;
