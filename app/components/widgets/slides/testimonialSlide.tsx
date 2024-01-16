import Image from 'next/image';
import { TestimonialsSlideProps } from '@/app/types/types';
import Card from '../card/Card';
import StarRating from '../star-rating/StarRating';
import { FaQuoteRight } from 'react-icons/fa';

const TestimonialSlide = (props: TestimonialsSlideProps) => {
  const { id, title, img, alt, comment, occupation, rating } = props.slide;
  return (
    <Card key={id} tailwind="testimonial-card">
      <FaQuoteRight className="testimonial-q-mark" />
      <Image src={img} alt={alt} className="testimonial-img" />
      <h1 className="testimonial-title">{title}</h1>
      <h2 className="testimonial-job">{occupation}</h2>
      <StarRating rating={rating} />
      <p className="testimonial-comment">{comment}</p>
    </Card>
  );
};

export default TestimonialSlide;
