import '@/app/_lib/styles/globals.css';
import Header from '@/app/_components/layout/admin/header/header';
import Sidebar from '@/app/_components/layout/admin/sidebar/sidebar';

const AdminLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <main className="admin-glow grid-rows-12 relative sm:grid min-h-screen grid-cols-12 ga bg-coffee-190 sm:grid-flow-col">
      <Sidebar />
      <Header />
      {children}
    </main>
  );
};
export default AdminLayout;
