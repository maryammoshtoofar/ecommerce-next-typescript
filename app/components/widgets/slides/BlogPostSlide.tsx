import Image from 'next/image';
import { BlogPostSlideProps } from '@/app/types/types';
import Card from '../card/Card';
import { shortenDescription } from '@/lib/utils/utils';

const BlogPostSlide = (props: BlogPostSlideProps) => {
  const { id, title, caption, img, alt } = props.slide;
  return (
    <Card key={id} tailwind="bg-coffee-160 h-full rounded-xl ">
      <h1 className="p-6 text-2xl capitalize text-white">{title}</h1>
      <p className="px-12  capitalize  leading-10 text-white ">
        {shortenDescription(caption, 250)}
      </p>
      <Image src={img} alt={alt} className="mb-2 ms-10 mt-10" />
    </Card>
  );
};

export default BlogPostSlide;
