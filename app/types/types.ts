import { Component, ReactElement } from 'react';

export type TailwindComponent = {
  children?: React.ReactNode;
  tailwind?: string;
  component?: ReactElement;
};
