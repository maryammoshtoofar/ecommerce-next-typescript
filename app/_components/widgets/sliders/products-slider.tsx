'use client';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination, Autoplay } from 'swiper/modules';
import { SwiperOptions } from 'swiper/types/swiper-options';

import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import Slide from '@/app/_components/widgets/slides/product-slide';
import { recommendedProducts } from '@/app/_lib/recommended-products';

const ProductSlider = () => {
  return (
    <section className="product-slider-section">
      <h1 className="product-slider-title">recommended</h1>
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
        className="product-slider"
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
