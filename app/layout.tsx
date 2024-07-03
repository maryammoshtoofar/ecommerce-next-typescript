import '@/app/_styles/globals.css';
import type { Metadata } from 'next';
import { Dancing_Script, Roboto_Slab } from 'next/font/google';
import { UIComponent } from './_types/component-types';
import { ToastProvider } from './_components/widgets';
import {
  ClerkProvider,
  SignInButton,
  SignedIn,
  SignedOut,
  UserButton,
} from '@clerk/nextjs';
const slab = Roboto_Slab({
  subsets: ['latin'],
  variable: '--font-roboto-slab',
  weight: '200',
});

const dancingScript = Dancing_Script({
  subsets: ['latin'],
  variable: '--font-dancing-script',
  weight: '400',
});

export const metadata: Metadata = {
  title: 'Coffee Ecommerce',
  description: 'Buy Coffee and Coffee Equipment Online',
};

const RootLayout = ({ children }: UIComponent) => {
  return (
    <ClerkProvider>
      <html
        lang="en"
        className={`${slab.variable} ${dancingScript.variable} m-0 h-full scroll-smooth p-0`}
      >
        <body className="m-0 h-full p-0 font-slab">
          <ToastProvider>{children}</ToastProvider>
        </body>
      </html>
    </ClerkProvider>
  );
};
export default RootLayout;
