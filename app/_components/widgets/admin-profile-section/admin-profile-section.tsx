import Image from 'next/image';
import profilePhoto from '@/public/img/admin-profile.png';

const ProfileSection = () => {
  return (
    <article>
      <Image src={profilePhoto} alt="Profile" />
      <h3>Admin</h3>
      <span>Lee Robinson</span>
    </article>
  );
};

export default ProfileSection;
