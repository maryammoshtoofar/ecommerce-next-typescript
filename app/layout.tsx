import '@/lib/styles/globals.css';
import Header from '@/app/components/layout/user/header/Header';
import Footer from '@/app/components/layout/user/footer/Footer';
import type { Metadata } from 'next';
import {
  Dancing_Script,
  Roboto_Slab,
} from 'next/font/google';
import Hero from './components/widgets/hero/Hero';

const slab = Roboto_Slab({
  subsets: ['latin'],
  variable: '--font-roboto-slab',
  weight: '100',
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
      <body className="bg-coffee-470 font-slab">
        <div className="home-glow">
          <Header />
          <Hero />
        </div>
        {children}
        {/* <Footer /> */}
      </body>
    </html>
  );
};
export default RootLayout;
