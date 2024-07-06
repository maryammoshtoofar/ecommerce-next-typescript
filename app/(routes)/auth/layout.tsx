const LoginLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <main className="flex min-h-screen w-full flex-col gap-4 bg-coffee-500 lg:flex-row lg:gap-0">
      {children}
    </main>
  );
};
export default LoginLayout;
