import Image from 'next/image';
import profilePhoto from '@/public/img/admin-profile.png';
import { FaRegBell } from 'react-icons/fa6';

const ProfileSection = () => {
  return (
    <article className="col-span-3 flex items-center justify-evenly text-coffee-360 sm:col-span-6 xl:col-span-4">
      <div className="flex gap-2">
        <Image
          src={profilePhoto}
          alt="Profile"
          className="w-1/2 rounded-lg sm:w-auto"
        />
        <div>
          <h3 className="hidden  text-coffee-460 sm:block">Admin</h3>
          <span className="hidden text-sm font-bold sm:inline">
            Lee Robinson
          </span>
        </div>
      </div>
      <FaRegBell className="cursor-pointer text-xl hover:text-coffee-70 sm:text-3xl" />
    </article>
  );
};

export default ProfileSection;
