import Image from 'next/image';
import { AboutSlideProps } from '@/app/_types/componenet-types';
import Card from '../card/card';
import {
  generateCaptionLength,
  shortenDescription,
} from '@/app/_lib/utils/utils';
import { useEffect, useState } from 'react';

const AboutSlide = (props: AboutSlideProps) => {
  const { id, img, alt, title, caption } = props.slide;
  const { screenWidth } = props;
  const [captionLength, setCaptionLength] = useState(397);

  useEffect(() => {
    setCaptionLength(generateCaptionLength(screenWidth, 'about'));
  }, [screenWidth]);

  return (
    <Card key={id} tailwind="about-slide">
      <h1 className="about-slide-title">{title}</h1>
      <Image src={img} alt={alt} className="about-slide-img" />
      <p className="about-slide-caption">
        {shortenDescription(caption, captionLength)}
      </p>
      <button className="cursor-pointer self-end text-white underline">
        More
      </button>
    </Card>
  );
};

export default AboutSlide;
