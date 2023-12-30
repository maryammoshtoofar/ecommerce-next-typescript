import Image from 'next/image';
import { TestimonialsSlideProps } from '@/app/types/types';
import Card from '../card/Card';
import StarRating from '../star-rating/StarRating';
import { FaQuoteRight } from 'react-icons/fa';

const TestimonialSlide = (props: TestimonialsSlideProps) => {
  const { id, title, img, alt, comment, occupation, rating } = props.slide;
  return (
    <Card
      key={id}
      tailwind="bg-coffee-680 rounded-xl rounded-b-none flex flex-col items-center border-4 border-coffee-100 border-b-0 h-full w-full"
    >
      <FaQuoteRight
        className=" invisible absolute right-5 -top-6 text-coffee-20 q-mark"
        size="2.5em"
      />
      <Image
        src={img}
        alt={alt}
        className="rounded-full w-1/4 mt-5 border-4 border-coffee-70 "
      />
      <h1 className="capitalize text-white text-2xl pt-3">{title}</h1>
      <h2 className="capitalize text-white text-2xl pb-3">{occupation}</h2>
      <StarRating rating={rating} />

      <p className="text-white capitalize px-12 pb-12 text-center ">{comment}</p>
    </Card>
  );
};

export default TestimonialSlide;
