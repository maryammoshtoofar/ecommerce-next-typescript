'use client';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination, Autoplay } from 'swiper/modules';
import { SwiperOptions } from 'swiper/types/swiper-options';

import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import Slide from '../slide/Slide';
import { slides } from '@/lib/slides';

const Slider = () => {
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
          {slides.map((slide) => (
            <SwiperSlide key={1} className="my-8">
              <div className="flex h-full w-full items-center justify-center">
                <Slide slide={slide} />
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </section>
  );
};

export default Slider;
