// import type { Config } from 'tailwindcss';
import { colors } from './app/_lib/styles/colors';
import plugin from 'tailwindcss/plugin';

export default {
  content: [
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors,
      fontFamily: {
        slab: ['var(--font-roboto-slab)'],
        dancing: ['var(--font-dancing-script)'],
      },
      textShadow: {
        sm: '0 1px 2px var(--tw-shadow-color)',
        DEFAULT: '0 2px 4px var(--tw-shadow-color)',
        lg: '0 8px 16px var(--tw-shadow-color)',
      },
      borderRadius: {
        none: '0',
        sm: '0.125rem',
        DEFAULT: '0.25rem',
        md: '0.375rem',
        lg: '0.5rem',
        full: '9999px',
        large: '12px',
        xl: '28px',
      },
      backgroundImage: {
        testimonials: "url('/img/testimonial-bg.png')",
        hero: "url('/img/hero.png')",
      },
      gridTemplateColumns: {
        // Simple 16 column grid
        header: 'repeat(17, minmax(0, 1fr))',
        // Complex site-specific column configuration
        footer: '200px minmax(900px, 1fr) 100px',
      },
      gridColumnStart: {
        '13': '13',
        '14': '14',
        '15': '15',
        '16': '16',
        '17': '17',
      },
      gridColumnEnd: {
        '13': '13',
        '14': '14',
        '15': '15',
        '16': '16',
        '17': '17',
        '18': '18',
      },
      screens: {
        tablet: '850px',
        // => @media (min-width: 8500px) { ... }

        laptop: '1024px',
        // => @media (min-width: 1024px) { ... }

        desktop: '1280px',
        // => @media (min-width: 1280px) { ... }
      },
    },
  },
  plugins: [
    plugin(function ({ matchUtilities, theme }) {
      matchUtilities(
        {
          'text-shadow': (value) => ({
            textShadow: value,
          }),
        },
        { values: theme('textShadow') },
      );
    }),
  ],
};
