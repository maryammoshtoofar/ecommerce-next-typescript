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
        className=" q-mark invisible absolute -top-6 right-5 text-coffee-20"
        size="2.5em"
      />
      <Image
        src={img}
        alt={alt}
        className="mt-5 w-1/4 rounded-full border-4 border-coffee-70 "
      />
      <h1 className="pt-3 text-2xl capitalize text-white">{title}</h1>
      <h2 className="pb-3 text-2xl capitalize text-white">{occupation}</h2>
      <StarRating rating={rating} />

      <p className="px-12 pb-12 text-center capitalize text-white ">
        {comment}
      </p>
    </Card>
  );
};

export default TestimonialSlide;
