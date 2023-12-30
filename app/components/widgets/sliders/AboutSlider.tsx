'use client';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination, Autoplay } from 'swiper/modules';
import { SwiperOptions } from 'swiper/types/swiper-options';

import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import Slide from '../slides/AboutSlide';
import { aboutSlides } from '@/lib/aboutSlides';


const AboutSlider = () => {
  return (
    <section className="relative py-12 w-5/6">
      <div className="container">
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
                <Slide slide={slide} />
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </section>
  );
};

export default AboutSlider;
