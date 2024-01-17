import Input from '@/app/_components/base/input/input';
import Button from '@/app/_components/base/button/button';
import { GoBell } from 'react-icons/go';
const NewsletterForm = () => {
  return (
    <section className="newsletter-section">
      <h1 className="newsletter-title">
        subscribe to our newsletter
        <span className="hidden sm:inline">, discounts and promotions</span>
      </h1>
      <form className="newsletter-form">
        <Input
          type="text"
          placeholder="Your Email Address"
          component={<GoBell />}
        />
        <Button label="Subscribe" tailwind="bg-coffee-600 m-auto" />
      </form>
    </section>
  );
};

export default NewsletterForm;
