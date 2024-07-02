import { UserHeader as Header, Footer } from '@/app/_components/layout';
import { StoreProvider } from '@/app/_components/layout';
const UserLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <>
      <StoreProvider>
        <Header />
        {children}
        <Footer />
      </StoreProvider>
    </>
  );
};
export default UserLayout;
