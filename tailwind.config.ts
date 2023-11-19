import defaultTheme from 'tailwindcss/defaultTheme';
import { colors } from './app/styles/colors';

export default {
  content: ['./app/**/*.{js,ts,jsx,tsx,mdx}'],
  theme: {
    extend: {
      fontFamily: {
        sans: ['var(--font-inter)'],
        mono: ['var(--font-roboto-mono)'],
      },
      colors,
    },
  },
  plugins: [],
};
