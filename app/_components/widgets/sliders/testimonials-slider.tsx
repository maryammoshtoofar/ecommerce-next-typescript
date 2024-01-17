'use client';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination, EffectCreative } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import Slide from '../slides/testimonial-slide';
import { testimonials } from '@/app/_lib/testimonials';

const TestimonialsSlider = () => {
  return (
    <section className="testimonials-section">
      <div className="testimonials ">
        <h1 className="testimonials-title">customer review</h1>
        <Swiper
          initialSlide={4}
          slidesPerView={3}
          breakpoints={{
            280: {
              slidesPerView: 1.3,
            },
            640: {
              slidesPerView: 1.5,
            },
            1024: {
              slidesPerView: 2.5,
            },
            1280: {
              slidesPerView: 3,
            },
          }}
          spaceBetween={25}
          effect={'creative'}
          grabCursor={true}
          centeredSlides={true}
          loop={true}
          creativeEffect={{
            prev: {
              translate: ['-110%', 270, -1],
            },
            next: {
              translate: ['110%', 270, 1],
            },
            perspective: true,
          }}
          navigation={true}
          modules={[EffectCreative, Pagination, Navigation]}
        >
          {testimonials.map((slide) => (
            <SwiperSlide key={slide.id} className="pt-8 sm:pt-32">
              <Slide slide={slide} />
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </section>
  );
};

export default TestimonialsSlider;
