import Image from 'next/image';
import cupAndPeople from '@/app/_assets/cup-and-people.png';
import { MdOutlineCalendarToday } from 'react-icons/md';
import { MdOutlineWatchLater } from 'react-icons/md';
import { LuUsers2 } from 'react-icons/lu';
import { AiOutlineUser } from 'react-icons/ai';
import { MdOutlinePhoneIphone } from 'react-icons/md';
import { RxEnvelopeClosed } from 'react-icons/rx';
import { TbReservedLine } from 'react-icons/tb';
import { Button, Input } from '@/app/_components/base/';
export const ReserveTable = () => {
  return (
    <section className="reserve-table-section">
      <h1 className="reserve-table-title">
        reserve <span className="hidden sm:inline">a table</span>
      </h1>
      <Image src={cupAndPeople} alt="reserve" className="reserve-table-img" />
      <form className="reserve-table-form ">
        <Input
          type="text"
          placeholder="Date"
          component={<MdOutlineCalendarToday />}
        />
        <div className="reserve-table-inputs-flexed">
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
        <div className="reserve-table-inputs-flexed">
          <Input
            type="text"
            placeholder="Your Email"
            component={<RxEnvelopeClosed />}
          />
          <Button
            label="Reserve"
            mode="secondary"
            component={<TbReservedLine />}
          />
        </div>
      </form>
    </section>
  );
};
