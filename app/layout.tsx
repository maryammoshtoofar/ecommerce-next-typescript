import '@/lib/styles/globals.css';
import Header from '@/app/components/layout/user/header/Header';
import Footer from '@/app/components/layout/user/footer/Footer';
import type { Metadata } from 'next';
import { Playfair_Display, Dancing_Script } from 'next/font/google';

const playfair = Playfair_Display({
  subsets: ['latin'],
  variable: '--font-playfair-display',
});

const dancingScript = Dancing_Script({
  subsets: ['latin'],
  variable: '--font-dancing-script',
});

export const metadata: Metadata = {
  title: 'Coffee Ecommerce',
  description: 'Buy Coffee and Coffee Equipment Online',
};
const RootLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <html
      lang="en"
      className={`${playfair.variable} ${dancingScript.variable}`}
    >
      <body className="bg-coffee-470 font-playfair">
        <div className='home-glow'>
          <Header />
          {children}
          <Footer />
        </div>
      </body>
    </html>
  );
};
export default RootLayout;
