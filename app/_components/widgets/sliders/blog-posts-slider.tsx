'use client';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination, Autoplay } from 'swiper/modules';
import { SwiperOptions } from 'swiper/types/swiper-options';
import blogBg from '@/app/_assets/blog-bg.png';
import Slide from '../slides/blog-post-slide';
import { blogPosts } from '@/app/_lib/blog-posts';
import Image from 'next/image';
import useWindowDimensions from '@/app/_hooks/useWindowDimensions';

const BlogPostsSlider = () => {
  const { width } = useWindowDimensions();
  return (
    <section className="blog-posts-section">
      <Image
        src={blogBg}
        alt="blog-post-background"
        className="blog-posts-bg"
      />
      <div className="container m-auto">
        <h1 className="blog-posts-title">
          our blog
        </h1>
        <Swiper
          modules={[Navigation, Pagination, Autoplay]}
          spaceBetween={45}
          // autoplay
          slidesPerView={2.5}
          breakpoints={{
            //  >= 280px
            280: {
              slidesPerView: 1,
            },
            1024: {
              slidesPerView: 2,
            },
            1280: {
              slidesPerView: 2.5,
            },
          }}
          grabCursor={true}
          onSwiper={(swiper: SwiperOptions) => console.log(swiper)}
        >
          {blogPosts.map((slide) => (
            <SwiperSlide key={slide.id} className="py-10">
              <Slide slide={slide} screenWidth={width} />
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </section>
  );
};

export default BlogPostsSlider;
