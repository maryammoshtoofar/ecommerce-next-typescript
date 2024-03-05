import { TabProps } from '@/app/_types/componenet-types';
import clsx from 'clsx';

const Tab = (props: TabProps) => {
  const changeActiveTab = (tab: number) => {
    props.setActiveTab(tab);
  };
  return (
    <>
      <span
        onClick={() => changeActiveTab(props.tabNumber)}
        className={clsx(
          ' cursor-pointer border-coffee-70 pb-2 text-3xl text-coffee-70',
          { 'border-b-2': props.active },
        )}
      >
        {props.children}
      </span>
    </>
  );
};
export default Tab;
