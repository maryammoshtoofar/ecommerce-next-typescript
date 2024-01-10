import Image from 'next/image';
import { AboutSlideProps } from '@/app/types/types';
import Card from '../card/Card';
import { generateCaptionLength, shortenDescription } from '@/lib/utils/utils';
import { useEffect, useState } from 'react';

const AboutSlide = (props: AboutSlideProps) => {
  const { id, img, alt, title, description } = props.slide;
  const { screenWidth } = props;
  const [captionLength, setCaptionLength] = useState(397);

  useEffect(() => {
    setCaptionLength(generateCaptionLength(screenWidth));
  }, [screenWidth]);

  return (
    <Card key={id} tailwind="about-slide">
      <h1 className="about-slide-title">{title}</h1>
      <Image src={img} alt={alt} className="about-slide-img" />
      <p className="about-slide-caption">
        {shortenDescription(description, captionLength)}
      </p>
      <button className="about-slide-btn">More</button>
    </Card>
  );
};

export default AboutSlide;
