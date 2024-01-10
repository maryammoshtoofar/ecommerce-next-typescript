'use client';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination, Autoplay } from 'swiper/modules';
import { SwiperOptions } from 'swiper/types/swiper-options';
import blogBg from '@/app/assets/blog-bg.png';

import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import Slide from '../slides/BlogPostSlide';
import { blogPosts } from '@/lib/blogPosts';
import Image from 'next/image';

const BlogPostsSlider = () => {
  return (
    <section className="relative mt-24 w-full bg-coffee-290 first-letter:mt-12">
      <Image
        src={blogBg}
        alt="blog post background"
        className="absolute bottom-0 h-full"
      />
      <div className="container m-auto">
        <h1 className="gradient-text absolute -top-10 mb-9 text-center font-dancing text-5xl capitalize">
          our blog
        </h1>
        <Swiper
          modules={[Navigation, Pagination, Autoplay]}
          spaceBetween={45}
          // autoplay
          slidesPerView={2.5}
          grabCursor={true}
          onSwiper={(swiper: SwiperOptions) => console.log(swiper)}
        >
          {blogPosts.map((slide) => (
            <SwiperSlide key={slide.id} className="py-10">
              <Slide slide={slide} />
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </section>
  );
};

export default BlogPostsSlider;
