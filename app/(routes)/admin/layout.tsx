import '@/app/_lib/styles/globals.css';
import Header from '@/app/_components/layout/admin/header/header';
import Sidebar from '@/app/_components/layout/admin/sidebar/sidebar';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Coffee Ecommerce',
  description: 'Buy Coffee and Coffee Equipment Online',
};
const RootLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <div className="home-glow bg-coffee-470">
      <Header />
      <Sidebar />
      {children}
    </div>
  );
};
export default RootLayout;
