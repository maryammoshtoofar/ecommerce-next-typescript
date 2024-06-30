import { AdminHeader as Header, Sidebar } from '@/app/_components/layout';

const AdminLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <main className="admin-glow relative h-full min-h-screen grid-cols-12 grid-rows-12 bg-coffee-190 sm:grid sm:grid-flow-col">
      <Sidebar />
      <Header />
      {children}
    </main>
  );
};
export default AdminLayout;
