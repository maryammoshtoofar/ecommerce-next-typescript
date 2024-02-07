'use client';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination, Autoplay } from 'swiper/modules';
import { SwiperOptions } from 'swiper/types/swiper-options';
import Slide from '../slides/about-slide';
import { aboutSlides } from '@/app/_lib/about-slides';
import Bean1 from '@/app/_components/base/wandering-coffee-beans/bean1';
import useWindowDimensions from '@/app/_hooks/useWindowDimensions';

const AboutSlider = () => {
  const { width } = useWindowDimensions();


  return (
    <section className="about-slider-section">
      <Bean1 tailwind="absolute -left-32 bottom-0" />
      {/* Main slides */}
      <Swiper
        modules={[Navigation, Pagination, Autoplay]}
        spaceBetween={10}
        // autoplay
        grabCursor={true}
        pagination={{ clickable: true }}
        onSwiper={(swiper: SwiperOptions) => console.log(swiper)}
        className="w-full px-8"
      >
        {aboutSlides.map((slide) => (
          <SwiperSlide key={slide.id} className="my-8">
            <Slide slide={slide} screenWidth={width} />
          </SwiperSlide>
        ))}
      </Swiper>
    </section>
  );
};

export default AboutSlider;