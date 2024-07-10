import {
  UsersRow as Row,
  UsersTable as Table,
} from '@/app/_components/widgets';
import user from '@/public/img/admin-profile.png';
import { Title, Section } from '@/app/_components/base';

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
