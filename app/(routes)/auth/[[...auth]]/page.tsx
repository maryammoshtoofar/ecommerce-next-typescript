'use client';
import Image from 'next/image';
import { DotsSpinner, Tab } from '@/app/_components/base';
import { useEffect, useState } from 'react';
import { authImages } from '@/app/_lib/auth-images';
import { getRandomImages } from '@/app/_utils/utils';
import { SignIn, SignUp, useUser, ClerkLoading } from '@clerk/nextjs';
import { useRouter } from 'next/navigation';
import { BASE_URL } from '@/app/_config/routes';
const Auth = () => {
  const { firstNum, secondNum } = getRandomImages(authImages);
  const [activeTab, setActiveTab] = useState<number>(1);
  const user = useUser();
  const router = useRouter();

  useEffect(() => {
    if (user.isLoaded && user.isSignedIn) {
      router.push(BASE_URL);
    }
  }, [user, router]);

  return (
    <>
      <section className="overflow-hidden md:h-1/2 lg:h-auto lg:w-1/2">
        {activeTab === 1 && (
          <Image
            className="md:scale-115 h-full opacity-30 lg:scale-150 xl:transform-none"
            src={authImages[firstNum - 1]}
            alt="coffee-world"
          />
        )}
        {activeTab === 2 && (
          <Image
            className="md:scale-115 h-full opacity-30 lg:scale-125 xl:transform-none"
            src={authImages[secondNum - 1]}
            alt="coffee-world"
          />
        )}
      </section>
      <section className="flex flex-col items-center justify-center overflow-y-auto py-6 lg:w-1/2 ">
        <div className="mb-4 flex  justify-between gap-6">
          <Tab
            active={activeTab === 1 ? true : false}
            setActiveTab={setActiveTab}
            tabNumber={1}
          >
            Sign In
          </Tab>
          <Tab
            active={activeTab === 2 ? true : false}
            setActiveTab={setActiveTab}
            tabNumber={2}
          >
            Sign Up
          </Tab>
        </div>
        <ClerkLoading>
          <DotsSpinner />
        </ClerkLoading>
        {activeTab === 1 && (
          <SignIn
            appearance={{
              elements: {
                formButtonPrimary:
                  'bg-coffee-340 hover:bg-coffee-350 md:text-xl; inline-flex items-center justify-center gap-2 rounded-[3rem] border-2 border-coffee-610 px-9 py-2 font-slab text-sm capitalize text-coffee-70',
                card: 'bg-coffee-50',
                headerTitle: 'text-coffee-340',
                headerSubtitle: 'text-coffee-320',
                socialButtonsBlockButton:
                  'bg-coffee-340 hover:bg-coffee-350 text-coffee-70',
                formFieldInput:
                  'w-full rounded-md py-2 ps-8 placeholder-coffee-150 focus:border focus:outline-none',
                footerAction: 'hidden',
              },
            }}
          />
        )}
        {activeTab === 2 && (
          <SignUp
            appearance={{
              elements: {
                formButtonPrimary:
                  'bg-coffee-340 hover:bg-coffee-350 md:text-xl; inline-flex items-center justify-center gap-2 rounded-[3rem] border-2 border-coffee-610 px-9 py-2 font-slab text-sm capitalize text-coffee-70',
                card: 'bg-coffee-50',
                headerTitle: 'text-coffee-340',
                headerSubtitle: 'text-coffee-320',
                socialButtonsBlockButton:
                  'bg-coffee-340 hover:bg-coffee-350 text-coffee-70',
                formFieldInput:
                  'w-full rounded-md py-2 ps-8 placeholder-coffee-150 focus:border focus:outline-none',
                footerAction: 'hidden',
              },
            }}
          />
        )}
      </section>
    </>
  );
};

export default Auth;
