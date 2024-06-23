import { IconType } from 'react-icons';
type Props = {
  children: React.ReactNode;
};

export const TableHeadCell = ({ children }: Props) => {
  return (
    <th className="whitespace-nowrap border border-coffee-640 p-1">
      {children}
    </th>
  );
};
