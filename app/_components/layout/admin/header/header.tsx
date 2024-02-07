import Input from '@/app/_components/base/input/input';
import ProfileSection from '@/app/_components/widgets/admin-profile-section/admin-profile-section';
import { FiSearch } from 'react-icons/fi';

type Props = {};

const Header = (props: Props) => {
  return (
    <header className="row-span-10 sm:col-span-9 flex justify-between pt-8">
      <div>
        <h1 className="capitalize">brewmaster's hub</h1>
        <h2 className="capitalize">crafting success, one sip at a time</h2>
      </div>
      <Input
        type="text"
        placeholder="discover the essence of your data brew"
        tailwind="w-1/4"
        component={<FiSearch />}
      ></Input>
      <ProfileSection />
    </header>
  );
};

export default Header;
