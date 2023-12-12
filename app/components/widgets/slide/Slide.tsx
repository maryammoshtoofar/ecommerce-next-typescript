import Image from 'next/image';
import faceImage from '@/app/assets/our-story.png';
import { SlideProps } from '@/app/types/types';
import Card from '../card/Card';
import { shortenDescription } from '@/lib/utils/utils';
const OurStory = (props: SlideProps) => {
  const { id, img, alt, title, description } = props.slide;
  return (
    <Card tailwind="flex flex-col items-end my-6 py-12 gap-3 px-8 rounded-[2rem] w-full relative bg-coffee-640 slide-glow">
      <h1 className="absolute -top-8 capitalize text-coffee-70 text-5xl font-dancing font-bold text-shadow-lg shadow-coffee-650">
        {title}
      </h1>
      <Image src={img} alt={alt} className="absolute -top-16 left-0 " />
      <p className="text-white justify-self-end capitalize box-border w-1/2  leading-10 text-lg  ">
        {shortenDescription(description, 397)}
      </p>
      <button className="text-white self-end">
        <a className="underline" href="#">
          More
        </a>
      </button>
    </Card>
  );
};

export default OurStory;
