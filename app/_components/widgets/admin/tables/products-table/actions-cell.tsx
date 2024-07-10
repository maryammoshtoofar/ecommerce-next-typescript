import { Cell } from '@/app/_components/base';
import Link from 'next/link';
import { BiDetail } from 'react-icons/bi';
import { LuPencilLine, LuTrash } from 'react-icons/lu';
import { TfiMoreAlt } from 'react-icons/tfi';

type Props = { id: string };

export const ActionsCell = ({ id }: Props) => {

  return (
    <Cell customContainerStyle="flex lg:gap-3 text-lg text-coffee-100 ">
      <BiDetail className="hidden cursor-pointer transition-all hover:text-coffee-340 md:inline" />
      <Link href={`?show=true&id=${id}`}>
        <LuPencilLine className="hidden cursor-pointer transition-all hover:text-coffee-340  md:inline " />
      </Link>
      <Link href={`?id=${id}`}>
        <LuTrash className="hidden cursor-pointer transition-all hover:text-red-400 md:inline" />
      </Link>
      <TfiMoreAlt className="cursor-pointer transition-all hover:text-coffee-340 md:hidden" />
    </Cell>
  );
};
