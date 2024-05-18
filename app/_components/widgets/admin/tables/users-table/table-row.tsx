import { UIComponent } from '@/app/_types/component-types';
import Image, { StaticImageData } from 'next/image';
import { BiDetail } from 'react-icons/bi';
import { LuPencilLine } from 'react-icons/lu';
import { LuTrash } from 'react-icons/lu';
import { TfiMoreAlt } from 'react-icons/tfi';
import { Checkbox, Flexbox, Cell, TableRow } from '@/app/_components/base';

type Props = UIComponent & {
  id: string;
  thumbnail: StaticImageData;
  name: string;
  lastName: string;
  userName: string;
  email: string;
};

export const UsersRow = ({
  thumbnail,
  id,
  name,
  lastName,
  userName,
  email,
}: Props) => {
  return (
    <TableRow>
      <Cell>
        <Checkbox />
      </Cell>
      <Cell>{id}</Cell>
      <Cell>
        <Flexbox tailwind="gap-4 py-2">
          <Image
            src={thumbnail}
            alt={name}
            className="max-w-none rounded-full"
          />
          {name}
          {lastName}
        </Flexbox>
      </Cell>
      <Cell tailwind="hidden sm:table-cell">{userName}</Cell>
      <Cell>
        <Flexbox>{email}</Flexbox>
      </Cell>
      <Cell customContainerStyle="flex lg:gap-3 text-lg text-coffee-100 ">
        <BiDetail className="hidden cursor-pointer transition-all hover:text-coffee-340 md:inline" />
        <LuPencilLine className="hidden cursor-pointer transition-all hover:text-coffee-340  md:inline " />
        <LuTrash className="hidden cursor-pointer transition-all hover:text-red-400 md:inline" />
        <TfiMoreAlt className="cursor-pointer transition-all hover:text-coffee-340 md:hidden" />
      </Cell>
    </TableRow>
  );
};
