import { UIComponent } from '@/app/types/types';
import Image from 'next/image';
import cupAndPeople from '@/app/assets/cup-and-people.png';
import Input from '@/app/components/base/input/Input';
import { MdOutlineCalendarToday } from 'react-icons/md';
import Button from '@/app/components/base/button/Button';
const ReserveTable = (props: UIComponent) => {
  return (
    <div className="form-glow relative flex w-full items-center justify-between gap-80 bg-coffee-640 px-32 py-10">
      <h1 className="gradient-text absolute -top-10 right-3/4 font-dancing text-5xl capitalize">
        reserve a table
      </h1>
      <Image src={cupAndPeople} alt="reserve" />
      <form className="flex grow flex-col gap-6 ">
        <Input
          type="text"
          placeholder="Date"
          component={<MdOutlineCalendarToday />}
        />
        <div className="flex w-full gap-3">
          <Input
            type="text"
            placeholder="Time"
            component={<MdOutlineCalendarToday />}
          />
          <Input
            type="text"
            placeholder="Guest"
            component={<MdOutlineCalendarToday />}
          />
        </div>
        <Input
          type="text"
          placeholder="Your Name"
          component={<MdOutlineCalendarToday />}
        />
        <Input
          type="text"
          placeholder="Your Phone"
          component={<MdOutlineCalendarToday />}
        />
        <div className="flex w-full gap-3">
          <Input
            type="text"
            placeholder="Your Email"
            component={<MdOutlineCalendarToday />}
          />
          <Button label="Reserve" tailwind="py-0 text-lg" />
        </div>
      </form>
    </div>
  );
};

export default ReserveTable;
