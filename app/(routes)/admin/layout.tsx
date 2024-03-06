import '@/app/_lib/styles/globals.css';
import Header from '@/app/_components/layout/admin/header/header';
import Sidebar from '@/app/_components/layout/admin/sidebar/sidebar';
import AddProductModal from '@/app/_components/widgets/admin/add-product-modal/add-product-modal';

const AdminLayout = ({
  children,
}: {
  children: React.ReactNode;
}) => {


  console.log('modal');
  return (
    <main className="admin-glow grid-rows-12 ga relative min-h-screen grid-cols-12 bg-coffee-190 sm:grid sm:grid-flow-col">
      <Sidebar />
      <Header />
      {children}
    </main>
  );
};
export default AdminLayout;
