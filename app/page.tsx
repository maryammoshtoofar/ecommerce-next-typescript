
import Hero from '@/app/components/widgets/hero/Hero';
import Slider from '@/app/components/widgets/slider/Slider';



const Home = () => {
  return (
    <main className=" flex flex-col items-center justify-between">
      <Hero />
      <Slider />
    </main>
  );
};

export default Home;
