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
    <section className="relative py-12  ">
      <div className="products container">
        <h1 className="gradient-text text-5xl capitalize font-dancing w-full text-center mb-9">
          recommended
        </h1>

        {/* Main slides */}
        <Swiper
          slidesPerView={3}
          modules={[Navigation, Pagination, Autoplay]}
          // autoplay
          grabCursor={true}
          pagination={{ clickable: true }}
          onSwiper={(swiper: SwiperOptions) => console.log(swiper)}
          className="w-4/5"
        >
          {recommendedProducts.map((slide) => (
            <SwiperSlide key={slide.id}>
              <Slide slide={slide} />
            </SwiperSlide>
          ))}
        </Swiper>
        <div id="containerForBullets"></div>
      </div>
    </section>
  );
};

export default ProductSlider;
