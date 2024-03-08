import '@/app/_styles/globals.css';
import Header from '@/app/_components/layout/user/header/header';
import Footer from '@/app/_components/layout/user/footer/footer';

const UserLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <>
      <Header />
      {children}
      <Footer />
    </>
  );
};
export default UserLayout;
