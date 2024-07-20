import { Cell } from '@/app/_components/base';
import Link from 'next/link';
import { BiDetail } from 'react-icons/bi';
import { LuPencilLine, LuTrash } from 'react-icons/lu';
import { TfiMoreAlt } from 'react-icons/tfi';

type Props = { id: string };

export const ActionsCell = ({ id }: Props) => {

  return (
    <Cell customContainerStyle="flex gap-2 lg:gap-3 text-lg text-coffee-100 ">
      <BiDetail className=" cursor-pointer transition-all hover:text-coffee-340" />
      <Link href={`?show=true&id=${id}`}>
        <LuPencilLine className=" cursor-pointer transition-all hover:text-coffee-340" />
      </Link>
      <Link href={`?id=${id}`}>
        <LuTrash className=" cursor-pointer transition-all hover:text-red-400" />
      </Link>

    </Cell>
  );
};
