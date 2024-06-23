import { StaticImageData } from 'next/image';
import { Dispatch, ReactElement, SetStateAction } from 'react';

export type UIComponent = {
  children?: React.ReactNode;
  tailwind?: string;
  component?: ReactElement;
  id?: string;
};

export type ButtonProps = UIComponent & {
  mode?: string;
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
    caption: string;
  };
  screenWidth: number;
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
  screenWidth: number;
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
  value?: string | number;
};

export type TabProps = UIComponent & {
  active?: boolean;
  setActiveTab: Dispatch<SetStateAction<number>>;
  tabNumber: number;
};
export type MenuItemProps = UIComponent & {
  name: string;
  price: number;
  dir: 'left' | 'right';
};

export type StarRatingProps = UIComponent & {
  rating: number | null;
};
export type ImageArray = StaticImageData[];

export type AdminNavItemProps = UIComponent & {
  active?: boolean;
  href: string;
};
