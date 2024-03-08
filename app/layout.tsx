import '@/app/_styles/globals.css';
import type { Metadata } from 'next';
import { Dancing_Script, Roboto_Slab } from 'next/font/google';
import { UIComponent } from './_types/component-types';

const slab = Roboto_Slab({
  subsets: ['latin'],
  variable: '--font-roboto-slab',
  weight: '200',
});

const dancingScript = Dancing_Script({
  subsets: ['latin'],
  variable: '--font-dancing-script',
  weight: '400',
});

export const metadata: Metadata = {
  title: 'Coffee Ecommerce',
  description: 'Buy Coffee and Coffee Equipment Online',
};

const RootLayout = ({ children }: UIComponent) => {
  return (
    <html
      lang="en"
      className={`${slab.variable} ${dancingScript.variable} min-h-screen scroll-smooth`}
    >
      <body className="min-h-screen font-slab">{children}</body>
    </html>
  );
};
export default RootLayout;
