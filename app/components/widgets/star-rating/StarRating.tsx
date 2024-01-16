import { StarRatingProps } from '@/app/types/types';
import { fillRatingStars } from '@/lib/utils/utils';
import React from 'react';
import { FaRegStar, FaStar, FaStarHalfAlt } from 'react-icons/fa';

const StarRating = (props: StarRatingProps) => {
  const starRating = fillRatingStars(props.rating);
  return (
    <span className="my-6 flex text-coffee-70">
      {starRating.map((star) => {
        switch (star) {
          case 'fill':
            return <FaStar />;
          case 'half':
            return <FaStarHalfAlt />;
          case 'empty':
            return <FaRegStar />;
        }
      })}
    </span>
  );
};

export default StarRating;
