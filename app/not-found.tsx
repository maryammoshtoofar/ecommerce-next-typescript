'use client';

import Link from 'next/link';
import { getRandomImages } from './_utils/utils';
import { notFoundImages } from './_lib/not-found-images';
import Image from 'next/image';
import { useEffect, useState } from 'react';
import { Button } from './_components/base';

export default function NotFound() {
  const [imageStyle, setImageStyle] = useState(
    'sm:h-96 sm:w-96 translate-y-80 rounded-lg transition-all duration-1000',
  );
  useEffect(() => {
    setImageStyle(
      'sm:h-96 sm:w-96 translate-y-0 rounded-lg transition-all duration-1000',
    );
  }, []);

  const { firstNum } = getRandomImages(notFoundImages);
  return (
    <div className="flex h-screen flex-col items-center justify-center gap-4 overflow-hidden bg-coffee-410">
      <h1 className="animate-bounce text-5xl font-bold text-coffee-70">
        Oops!
      </h1>
      <div className="flex flex-col items-center gap-2 xl:w-1/2 xl:flex-row">
        <Image
          className={imageStyle}
          src={notFoundImages[firstNum - 1]}
          alt="coffee-world"
        />
        <p className="px-4 text-center font-bold text-coffee-70 sm:text-2xl xl:px-0">
          Looks like you&apos;ve spilled your coffee. This page isn&apos;t brewing right
          now. Let&apos;s get you back on track!
        </p>
      </div>

      <Link href="/" className="animate-pulse">
        <Button label="Return Home" mode="secondary" />
      </Link>
    </div>
  );
}
