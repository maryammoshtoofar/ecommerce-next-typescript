import { UIComponent } from '@/app/types/types';
import Image from 'next/image';
import cupAndPeople from '@/app/assets/cup-and-people.png';
import Input from '@/app/components/base/input/Input';
import { MdOutlineCalendarToday } from 'react-icons/md';
import Button from '@/app/components/base/button/Button';
const ReserveTable = (props: UIComponent) => {
  return (
    <div className="bg-coffee-640 flex relative justify-between items-center px-32 w-full py-10 gap-80 form-glow">
      <h1 className="capitalize absolute -top-10 right-3/4 font-dancing gradient-text text-5xl">
        reserve a table
      </h1>
      <Image src={cupAndPeople} alt="reserve" />
      <form className="grow flex flex-col gap-6 ">
        <Input
          type="text"
          placeholder="Date"
          component={<MdOutlineCalendarToday />}
        />
        <div className="flex gap-3 w-full">
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
        <div className="flex gap-3 w-full">
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
