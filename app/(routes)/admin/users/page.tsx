import Row from '@/app/_components/widgets/admin/tables/users-table/table-row';
import Table from '@/app/_components/widgets/admin/tables/users-table/table';
import user from '@/public/img/admin-profile.png';
import houseBlend from '@/public/img/thumbnails/house-blend.png';
import robusta from '@/public/img/thumbnails/robusta.png';
import Title from '@/app/_components/base/admin/section-title/section-title';
import Section from '@/app/_components/base/containers/section/section';
const Users = () => {
  return (
    <Section>
      <Title>users</Title>
      <Table>
        <Row
          id="101-145-234975"
          thumbnail={user}
          userName="coffeelover95"
          name="john "
          lastName="doe"
          email="john@gmail.com"
        />
        <Row
          id="101-145-234975"
          thumbnail={user}
          userName="coffeelover95"
          name="john "
          lastName="doe"
          email="john@gmail.com"
        />
        <Row
          id="101-145-234975"
          thumbnail={user}
          userName="coffeelover95"
          name="john "
          lastName="doe"
          email="john@gmail.com"
        />
        <Row
          id="101-145-234975"
          thumbnail={user}
          userName="coffeelover95"
          name="john "
          lastName="doe"
          email="john@gmail.com"
        />
        <Row
          id="101-145-234975"
          thumbnail={user}
          userName="coffeelover95"
          name="john "
          lastName="doe"
          email="john@gmail.com"
        />
        <Row
          id="101-145-234975"
          thumbnail={user}
          userName="coffeelover95"
          name="john "
          lastName="doe"
          email="john@gmail.com"
        />
        <Row
          id="101-145-234975"
          thumbnail={user}
          userName="coffeelover95"
          name="john "
          lastName="doe"
          email="john@gmail.com"
        />
      </Table>
    </Section>
  );
};

export default Users;
