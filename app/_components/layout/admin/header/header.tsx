import Input from '@/app/_components/base/input/input';
import ProfileSection from '@/app/_components/widgets/admin-profile-section/admin-profile-section';
import { FiSearch } from 'react-icons/fi';

type Props = {};

const Header = (props: Props) => {
  return (
    <header className="grid grid-cols-12 items-center gap-4 xl:gap-12 ps-2 sm:ps-0 pt-10 sm:pt-4 sm:col-span-10 ">
      <div className='col-span-9 sm:col-span-6 xl:col-span-4'>
        <h1 className="text-3xl font-dancing sm:text-2xl lg:text-4xl font-bold capitalize text-coffee-360">
          brewmaster's hub
        </h1>
        <h2 className="hidden sm:block text-sm lg:text-lg font-bold capitalize text-coffee-360">
          crafting success, one sip at a time
        </h2>
      </div>
      <Input
        type="text"
        placeholder="discover the essence of your data brew"
        tailwind="order-last xl:order-none col-start-2 col-end-13 xl:col-span-4 w-11/12"
        component={<FiSearch />}
      ></Input>
      <ProfileSection />
    </header>
  );
};

export default Header;
