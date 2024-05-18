import Header from '@/app/_components/layout/admin/header/header';
import Sidebar from '@/app/_components/layout/admin/sidebar/sidebar';

const AdminLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <main className="admin-glow grid-rows-12 relative h-full min-h-screen grid-cols-12 bg-coffee-190 sm:grid sm:grid-flow-col overflow-auto">
      <Sidebar />
      <Header />
      {children}
    </main>
  );
};
export default AdminLayout;
