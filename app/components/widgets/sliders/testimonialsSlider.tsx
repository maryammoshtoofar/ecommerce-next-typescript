'use client';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination, EffectCreative } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import Slide from '../slides/testimonialSlide';
import { testimonials } from '@/lib/testimonials';

const TestimonialsSlider = () => {
  return (
    <section className="relative mt-24 w-11/12 first-letter:mt-12 ">
      <div className="testimonials m-auto bg-testimonials">
        <h1 className="gradient-text absolute -top-10 mb-9 w-full text-center font-dancing text-5xl capitalize">
          customer review
        </h1>
        <Swiper
          initialSlide={3}
          slidesPerView={3}
          spaceBetween={75}
          effect={'creative'}
          grabCursor={true}
          centeredSlides={true}
          loop={true}
          creativeEffect={{
            prev: {
              translate: ['-110%', 270, -1],
            },
            next: {
              translate: ['110%', 270, 0],
            },
            perspective: true,
          }}
          navigation={true}
          modules={[EffectCreative, Pagination, Navigation]}
        >
          {testimonials.map((slide) => (
            <SwiperSlide key={slide.id} className="pt-32">
              <Slide slide={slide} />
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </section>
  );
};

export default TestimonialsSlider;
