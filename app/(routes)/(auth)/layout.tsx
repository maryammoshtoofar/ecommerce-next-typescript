import '@/app/_lib/styles/globals.css';
import type { Metadata } from 'next';


export const metadata: Metadata = {
  title: 'Coffee Ecommerce',
  description: 'Buy Coffee and Coffee Equipment Online',
};
const AuthLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <div className="">
      rthrty
      {children}
    </div>
  );
};
export default AuthLayout;
