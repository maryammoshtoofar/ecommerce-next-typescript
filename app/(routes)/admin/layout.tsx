import {
  AdminHeader as Header,
  Sidebar,
  StoreProvider,
} from '@/app/_components/layout';
import { auth } from '@clerk/nextjs/server';
import { redirect } from 'next/navigation';
const AdminLayout = ({ children }: { children: React.ReactNode }) => {
  const { sessionClaims } = auth();
  // If the user does not have the admin role, redirect them to the home page
  if (sessionClaims?.metadata.role !== 'admin') {
    redirect('/');
  }

  return (
    <StoreProvider>
      <main className="admin-glow relative h-full min-h-screen grid-cols-12 bg-coffee-190 sm:grid sm:grid-flow-col">
        <Sidebar />
        <Header />
        {children}
      </main>
    </StoreProvider>
  );
};
export default AdminLayout;
