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
  };
};
export type AboutSlideProps = SlideProps & {
  slide: {
    title: string;
    description: string;
  };
};
export type ProductSlideProps = SlideProps & {
  slide: {
    type: string;
    title: string;
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
