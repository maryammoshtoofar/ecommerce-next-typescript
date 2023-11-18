import ThemeRegistry from '@/app/components/theme-registry/ThemeRegistry';
const RootLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <html lang="en">
      <ThemeRegistry>
        <body>
          {/* To be implemented later */}
          {children}
        </body>
      </ThemeRegistry>
    </html>
  );
};
export default RootLayout;
