import Image from 'next/image';
import { BlogPostSlideProps } from '@/app/_types/component-types';
import { Card } from '@/app/_components/widgets';
import { generateCaptionLength, shortenDescription } from '@/app/_utils/utils';
import { useEffect, useState } from 'react';

export const BlogPostSlide = (props: BlogPostSlideProps) => {
  const { id, title, caption, img, alt } = props.slide;
  const { screenWidth } = props;
  const [captionLength, setCaptionLength] = useState(250);

  useEffect(() => {
    setCaptionLength(generateCaptionLength(screenWidth, 'blogPost'));
  }, [screenWidth]);
  return (
    <Card key={id} tailwind="blog-post-card">
      <h1 className="blog-post-title">{title}</h1>
      <p className="blog-post-caption">
        {shortenDescription(caption, captionLength)}
      </p>
      <Image src={img} alt={alt} className="blog-post-img" />
    </Card>
  );
};

