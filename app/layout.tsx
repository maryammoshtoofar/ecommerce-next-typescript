import '@/app/_lib/styles/globals.css';
import Header from '@/app/_components/layout/user/header/header';
import Footer from '@/app/_components/layout/user/footer/footer';
import type { Metadata } from 'next';
import { Dancing_Script, Roboto_Slab } from 'next/font/google';

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
const RootLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <html lang="en" className={`${slab.variable} ${dancingScript.variable}`}>
      <body className="font-slab">
        {children}
      </body>
    </html>
  );
};
export default RootLayout;
