import '@/app/styles/globals.css';
import Header from '@/app/components/layout/user/header/Header';
import Footer from '@/app/components/layout/user/footer/Footer';
import type { Metadata } from 'next';
import { Playfair_Display } from 'next/font/google';

const playfair = Playfair_Display({
  subsets: ['latin'],
});

export const metadata: Metadata = {
  title: 'Coffee Ecommerce',
  description: 'Buy Coffee and Coffee Equipment Online',
};
const RootLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <html lang="en">
      <body className={`${playfair.className} antialiased bg-coffee-470`}>
        <div>
          <Header />
          {children}
          <Footer />
        </div>
      </body>
    </html>
  );
};
export default RootLayout;
