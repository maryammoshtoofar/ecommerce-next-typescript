import Input from '@/app/components/base/input/Input';
import Button from '@/app/components/base/button/Button';
import { GoBell } from 'react-icons/go';
const NewsletterForm = () => {
  return (
    <section className="bg-coffee-640 w-full flex flex-col items-center gap-10 py-10 mt-32 newsletter-form-glow">
      <h1 className="capitalize text-coffee-70 text-xl">
        subscribe to our newsletter, discounts and promotions
      </h1>
      <form className="flex flex-col gap-10 w-1/3 items-center">
        <Input
          type="text"
          placeholder="Your Email Address"
          component={<GoBell />}
        />
        <Button label="Subscribe" tailwind="bg-coffee-600" />
      </form>
    </section>
  );
};

export default NewsletterForm;
