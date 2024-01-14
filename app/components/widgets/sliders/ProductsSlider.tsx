'use client';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination, Autoplay } from 'swiper/modules';
import { SwiperOptions } from 'swiper/types/swiper-options';

import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import Slide from '../slides/ProductSlide';
import { recommendedProducts } from '@/lib/recommendedProducts';

const ProductSlider = () => {
  return (
    <section className="relative w-5/6 py-12">
      <h1 className="gradient-text mb-9 w-full text-center font-dancing text-5xl capitalize">
        recommended
      </h1>
      {/* Main slides */}
      <Swiper
        slidesPerView={4}
        spaceBetween={10}
        breakpoints={{
          //  >= 280px
          280: {
            slidesPerView: 1,
          },
          //  >= 480px
          480: {
            slidesPerView: 2,
          },
          //  >= 640px
          640: {
            slidesPerView: 3,
          },
          1024: {
            slidesPerView: 4,
          },
        }}
        modules={[Navigation, Pagination, Autoplay]}
        // autoplay
        grabCursor={true}
        pagination={{ clickable: true }}
        onSwiper={(swiper: SwiperOptions) => console.log(swiper)}
        className="w-full px-8"
      >
        {recommendedProducts.map((slide) => (
          <SwiperSlide key={slide.id}>
            <Slide slide={slide} />
          </SwiperSlide>
        ))}
      </Swiper>
      <div id="containerForBullets"></div>
    </section>
  );
};

export default ProductSlider;
