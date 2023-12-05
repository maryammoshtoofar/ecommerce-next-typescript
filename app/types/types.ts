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
