import { StaticImageData } from 'next/image';
import { ReactElement } from 'react';

export type UIComponent = {
  children?: React.ReactNode;
  tailwind?: string;
  component?: ReactElement;
  id?: string;
};

export type ButtonProps = UIComponent & {
  primary?: boolean;
  label: string;
  onClick?: () => void;
};

export type SlideProps = UIComponent & {
  slide: {
    id: number;
    img: StaticImageData;
    alt: string;
    title: string;
  };
};
export type AboutSlideProps = SlideProps & {
  slide: {
    description: string;
  };
};
export type ProductSlideProps = SlideProps & {
  slide: {
    type: string;
  };
};

export type BlogPostSlideProps = SlideProps & {
  slide: {
    caption: string;
  };
};

export type TestimonialsSlideProps = SlideProps & {
  slide: {
    occupation: string;
    rating: number;
    comment: string;
  };
};

export type InputProps = UIComponent & {
  type: string;
  placeholder: string;
};

export type MenuItemProps = UIComponent & {
  name: string;
  price: number;
  dir: 'left' | 'right';
};

export type StarRatingProps = UIComponent & {
  rating: number;
};
