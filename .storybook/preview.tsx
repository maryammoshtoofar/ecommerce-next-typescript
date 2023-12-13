import React from 'react';
import type { Preview } from '@storybook/react';
import '@/lib/styles/globals.css';
import * as nextImage from 'next/image';

Object.defineProperty(nextImage, 'default', {
  configurable: true,
  value: (props: any) => <img {...props} />,
});
const preview: Preview = {
  parameters: {
    actions: { argTypesRegex: '^on[A-Z].*' },
    controls: {
      matchers: {
        color: /(background|color)$/i,
        date: /Date$/i,
      },
    },
  },
};

export default preview;
