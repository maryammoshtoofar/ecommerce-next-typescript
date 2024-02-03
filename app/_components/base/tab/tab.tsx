import { TabProps } from '@/app/_types/types';

const Tab = (props: TabProps) => {
  const changeActiveTab = (tab: number) => {
    props.setActiveTab(tab);
  };
  return (
    <span
      onClick={() => changeActiveTab(props.tabNumber)}
      className={`${
        props.active ? 'border-b-2' : ''
      }   cursor-pointer border-coffee-70 pb-2 text-3xl text-coffee-70`}
    >
      {props.children}
    </span>
  );
};
export default Tab;
