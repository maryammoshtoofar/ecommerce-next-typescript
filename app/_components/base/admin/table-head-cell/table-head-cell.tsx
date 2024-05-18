import { IconType } from 'react-icons';
type Props = {
  component?: IconType;
  children: React.ReactNode;
};

export const TableHeadCell = ({ children, component: Icon }: Props) => {
  return (
    <th className="whitespace-nowrap border border-coffee-640 p-1">
      {Icon && <Icon className="inline md:hidden" />}
      <span className="hidden md:inline">{children}</span>
    </th>
  );
};
