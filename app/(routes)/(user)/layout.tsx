import '@/app/_lib/styles/globals.css';
import Header from '@/app/_components/layout/user/header/header';
import Footer from '@/app/_components/layout/user/footer/footer';
import type { Metadata } from 'next';;

export const metadata: Metadata = {
  title: 'Coffee Ecommerce',
  description: 'Buy Coffee and Coffee Equipment Online',
};
const RootLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <div className="home-glow bg-coffee-470">
      <Header />
      {children}
      <Footer />
    </div>
  );
};
export default RootLayout;
