import { UIComponent } from '@/app/types/types';
import Image from 'next/image';
import cupAndPeople from '@/app/assets/cup-and-people.png';
import Input from '@/app/components/base/input/Input';
import { MdOutlineCalendarToday } from 'react-icons/md';
import { CiClock2 } from 'react-icons/ci';
import { FaRegClock } from 'react-icons/fa';
import { MdOutlineWatchLater } from 'react-icons/md';
import { LuUsers2 } from 'react-icons/lu';
import { AiOutlineUser } from 'react-icons/ai';
import { MdOutlinePhoneIphone } from 'react-icons/md';
import { RxEnvelopeClosed } from 'react-icons/rx';
import { TbReservedLine } from 'react-icons/tb';
import Button from '@/app/components/base/button/Button';
const ReserveTable = (props: UIComponent) => {
  return (
    <div className="form-glow relative flex w-full flex-col gap-20 bg-coffee-640 px-5 py-10 sm:flex-row sm:items-center sm:justify-between lg:gap-40 xl:gap-80 xl:px-32">
      <h1 className="gradient-text absolute -top-10 left-5 whitespace-nowrap font-dancing text-5xl capitalize">
        reserve <span className="hidden sm:inline">a table</span>
      </h1>
      <Image
        src={cupAndPeople}
        alt="reserve"
        className="max-sm:w-full sm:max-md:w-1/2"
      />
      <form className="flex grow flex-col gap-6 ">
        <Input
          type="text"
          placeholder="Date"
          component={<MdOutlineCalendarToday />}
        />
        <div className="flex flex-col items-center gap-6 md:flex-row md:gap-3">
          <Input
            type="text"
            placeholder="Time"
            component={<MdOutlineWatchLater />}
          />
          <Input type="text" placeholder="Guest" component={<LuUsers2 />} />
        </div>
        <Input
          type="text"
          placeholder="Your Name"
          component={<AiOutlineUser />}
        />
        <Input
          type="text"
          placeholder="Your Phone"
          component={<MdOutlinePhoneIphone />}
        />
        <div className="md: flex w-full flex-col items-center gap-6 md:flex-row">
          <Input
            type="text"
            placeholder="Your Email"
            component={<RxEnvelopeClosed />}
          />
          <Button
            label="Reserve"
            tailwind="py-2 text-lg w-1/2"
            mode="secondary"
            component={<TbReservedLine />}
          />
        </div>
      </form>
    </div>
  );
};

export default ReserveTable;
