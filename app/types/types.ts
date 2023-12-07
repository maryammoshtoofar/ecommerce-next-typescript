import { StaticImageData } from 'next/image';
import { ReactElement } from 'react';

export type UIComponent = {
  children?: React.ReactNode;
  tailwind?: string;
  component?: ReactElement;
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
    description: string;
  };
};
