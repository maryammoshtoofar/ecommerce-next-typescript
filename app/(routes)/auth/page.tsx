'use client';
import Image from 'next/Image';
import loginBg from '@/public/img/auth-1.jpg';
import registerBg from '@/public/img/auth-2.jpg';
import Input from '@/app/_components/base/input/input';
import Tab from '@/app/_components/base/tab/tab';
import { FaEnvelope } from 'react-icons/fa';
import { FaLock } from 'react-icons/fa';
import { FaFacebook } from 'react-icons/fa';
import { FaGoogle } from 'react-icons/fa';
import Button from '@/app/_components/base/button/button';
import { useEffect, useState } from 'react';
import { authImages } from '@/app/_lib/auth-images';
import { getRandomImages } from '@/app/_lib/utils/utils';

type Props = {};

const page = (props: Props) => {
  const { firstNum, secondNum } = getRandomImages(authImages);
  const [activeTab, setActiveTab] = useState<number>(1);

  return (
    <main className="flex min-h-screen w-full flex-col gap-4 bg-coffee-500 lg:max-h-screen lg:flex-row lg:gap-0">
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

      <section className="flex flex-col items-center justify-center pb-6 lg:w-1/2 lg:pb-0 ">
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
        <form className="flex w-1/2 flex-col items-center gap-8 pt-6">
          <Input
            type="string"
            placeholder="Email Address"
            component={<FaEnvelope />}
          />
          <Input
            type="password"
            placeholder="Password"
            component={<FaLock />}
          />
          {activeTab === 2 && (
            <Input
              type="password"
              placeholder="Confirm Password"
              component={<FaLock />}
            />
          )}
          {activeTab === 1 && <Button label="sign in" />}
          {activeTab === 2 && <Button label="sign up" />}
          {activeTab === 1 && (
            <a href="#" className="text-coffee-70">
              Forgot Password?
            </a>
          )}

          <div className="w-full text-coffee-70 before:inline-block before:w-1/3 before:border-b-2 before:border-coffee-300 before:align-middle after:inline-block after:w-1/3 after:self-end after:border-b-2 after:border-coffee-300 after:align-middle">
            <span className="inline-block w-1/3 px-4 py-0 text-center align-middle">
              OR
            </span>
          </div>
          <div className="flex gap-12 text-3xl text-coffee-300">
            <FaGoogle className="cursor-pointer" />
            <FaFacebook className="cursor-pointer" />
          </div>
        </form>
      </section>
    </main>
  );
};

export default page;
