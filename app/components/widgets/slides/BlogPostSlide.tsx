import Image from 'next/image';
import { BlogPostSlideProps } from '@/app/types/types';
import Card from '../card/Card';
import { shortenDescription } from '@/lib/utils/utils';

const BlogPostSlide = (props: BlogPostSlideProps) => {
  const { id, title, caption, img, alt } = props.slide;
  return (
    <Card key={id} tailwind="bg-coffee-160 h-full rounded-xl " >
      <h1 className="capitalize text-white text-2xl p-6">{title}</h1>
      <p className="text-white  capitalize  leading-10 px-12 ">
        {shortenDescription(caption, 250)}
      </p>
      <Image src={img} alt={alt} className="mt-10 ms-10 mb-2" />
    </Card>
  );
};

export default BlogPostSlide;
