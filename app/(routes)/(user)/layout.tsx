import { UserHeader as Header, Footer } from '@/app/_components/layout';

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
