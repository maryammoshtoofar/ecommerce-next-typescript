import { StarRatingProps } from '@/app/types/types';
import { fillRatingStars } from '@/lib/utils/utils';
import React from 'react';
import { FaRegStar, FaStar, FaStarHalfAlt } from 'react-icons/fa';

const StarRating = (props: StarRatingProps) => {
  const starRating = fillRatingStars(props.rating);
  return (
    <span className="flex text-coffee-70 my-6">
      {starRating.map((star) => {
        switch (star) {
          case 'fill':
            return <FaStar size="1.5rem" />;
          case 'half':
            return <FaStarHalfAlt size="1.5rem" />;
          case 'empty':
            return <FaRegStar size="1.5rem" />;
        }
      })}
    </span>
  );
};

export default StarRating;
