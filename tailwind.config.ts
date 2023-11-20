import { colors } from './app/styles/colors';

export default {
  content: ['./app/**/*.{js,ts,jsx,tsx,mdx}'],
  theme: {
    extend: {
      fontFamily: {
        luxurious_Roman: ['var(--font-alike)'],
      },
      colors,
    },
  },
  plugins: [],
};
