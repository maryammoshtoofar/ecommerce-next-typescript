import Image from 'next/image';
import profilePhoto from '@/public/img/admin-profile.png';
import { FaRegBell, FaDoorOpen } from 'react-icons/fa6';

export const ProfileSection = () => {
  return (
    <article className="col-span-6 flex items-center justify-evenly gap-3 pe-2 sm:col-span-6 sm:text-coffee-360 xl:col-span-4">
      <div className="flex gap-2">
        <Image
          src={profilePhoto}
          alt="Profile"
          className="rounded-lg sm:w-12"
        />
        <div>
          <h3 className="hidden  text-coffee-460 sm:block">Admin</h3>
          <span className="hidden text-sm font-bold sm:inline">
            Lee Robinson
          </span>
        </div>
      </div>
      <FaRegBell
        className="cursor-pointer text-3xl text-coffee-370 hover:text-coffee-70 sm:text-3xl"
        size={'2rem'}
      />
      <FaDoorOpen
        className="cursor-pointer text-3xl text-coffee-370 hover:text-coffee-70 sm:hidden sm:text-3xl"
        size={'2rem'}
      />
    </article>
  );
};
