import { StarRatingProps } from '@/app/_types/component-types';
import { fillRatingStars } from '@/app/_utils/utils';
import { FaRegStar, FaStar, FaStarHalfAlt } from 'react-icons/fa';

const StarRating = ({ rating, tailwind }: StarRatingProps) => {
  const starRating = fillRatingStars(rating);
  return (
    <span className={`my-6 flex text-coffee-70 ${tailwind} `}>
      {starRating.map((star, index) => {
        switch (star) {
          case 'fill':
            return <FaStar key={index} />;
          case 'half':
            return <FaStarHalfAlt key={index} />;
          case 'empty':
            return <FaRegStar key={index} />;
        }
      })}
    </span>
  );
};

export default StarRating;
