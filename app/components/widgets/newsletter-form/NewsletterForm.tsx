import Input from '@/app/components/base/input/Input';
import Button from '@/app/components/base/button/Button';
import { GoBell } from 'react-icons/go';
const NewsletterForm = () => {
  return (
    <section className="newsletter-form-glow mt-32 flex w-full flex-col items-center gap-10 bg-coffee-640 py-10">
      <h1 className="text-xl capitalize text-coffee-70">
        subscribe to our newsletter, discounts and promotions
      </h1>
      <form className="flex w-1/3 flex-col items-center gap-10">
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
