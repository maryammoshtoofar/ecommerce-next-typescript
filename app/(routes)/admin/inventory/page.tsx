import Row from '@/app/_components/widgets/admin/tables/products-table/table-row/table-row';
import Table from '@/app/_components/widgets/admin/tables/products-table/table';
import arabica from '@/public/img/thumbnails/arabica.png';
import houseBlend from '@/public/img/thumbnails/house-blend.png';
import robusta from '@/public/img/thumbnails/robusta.png';
import Title from '@/app/_components/base/admin/section-title/section-title';
import Section from '@/app/_components/base/containers/section/section';
import Modal from '@/app/_components/widgets/admin/add-product-modal/add-product-modal';
import Flexbox from '@/app/_components/base/containers/flexbox/flexbox';
import Button from '@/app/_components/base/button/button';
import Link from 'next/link';
type SearchParamProps = {
  searchParams: Record<string, string> | null | undefined;
};

const Inventory = ({ searchParams }: SearchParamProps) => {
  const show = searchParams?.show;
  return (
    <Section>
      <Flexbox tailwind="justify-between">
        <Title>inventory</Title>
        <Link href="?show=true">
          <Button label="add new product" />
        </Link>
      </Flexbox>

      <Table>
        <Row
          id="101-145-234975"
          thumbnail={arabica}
          name="dark roast "
          category="arabica "
          stock={true}
          price={250.0}
          quantity={760}
          rating={5}
        />
        <Row
          id="101-145-234975"
          thumbnail={houseBlend}
          name="house-blend"
          category="house blend"
          stock={true}
          price={250.0}
          quantity={760}
          rating={4.5}
        />
        <Row
          id="101-145-234975"
          thumbnail={robusta}
          name="dark roast"
          category="robusta"
          stock={false}
          price={250.0}
          quantity={760}
          rating={1.5}
        />
        <Row
          id="101-145-234975"
          thumbnail={arabica}
          name="dark roast"
          category="arabica"
          stock={true}
          price={250.0}
          quantity={760}
          rating={4}
        />
        <Row
          id="101-145-234975"
          thumbnail={houseBlend}
          name="dark roast"
          category="arabica"
          stock={false}
          price={250.0}
          quantity={760}
          rating={2.5}
        />
        <Row
          id="101-145-234975"
          thumbnail={robusta}
          name="dark roast"
          category="arabica"
          stock={true}
          price={250.0}
          quantity={760}
          rating={5}
        />
        <Row
          id="101-145-234975"
          thumbnail={arabica}
          name="dark roast"
          category="arabica"
          stock={false}
          price={250.0}
          quantity={760}
          rating={4.5}
        />
        <Row
          id="101-145-234975"
          thumbnail={houseBlend}
          name="dark roast"
          category="arabica"
          stock={true}
          price={250.0}
          quantity={760}
          rating={4}
        />
        <Row
          id="101-145-234975"
          thumbnail={robusta}
          name="dark roast"
          category="arabica"
          stock={true}
          price={250.0}
          quantity={760}
          rating={1.5}
        />
        <Row
          id="101-145-234975"
          thumbnail={arabica}
          name="dark roast"
          category="arabica"
          stock={false}
          price={250.0}
          quantity={760}
          rating={3.5}
        />
      </Table>
      {show && <Modal />}
    </Section>
  );
};

export default Inventory;
