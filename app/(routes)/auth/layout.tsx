import '@/app/_styles/globals.css';
import type { Metadata } from 'next';

const LoginLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <main className="flex min-h-screen w-full flex-col gap-4 bg-coffee-500 lg:max-h-screen lg:flex-row lg:gap-0">
      {children}
    </main>
  );
};
export default LoginLayout;
