import { StarRatingProps } from '@/app/_types/types';
import { fillRatingStars } from '@/app/_lib/utils/utils';
import { FaRegStar, FaStar, FaStarHalfAlt } from 'react-icons/fa';

const StarRating = (props: StarRatingProps) => {
  const starRating = fillRatingStars(props.rating);
  return (
    <span className={`my-6 flex text-coffee-70 ${props.tailwind} `}>
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
