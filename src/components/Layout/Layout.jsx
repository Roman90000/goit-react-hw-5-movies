import Header from 'components/Header/Header';
import { Container } from 'components/Header/Header.styled';
import { Outlet } from 'react-router-dom';

const Layout = () => {
  return (
    <Container>
      <Header />
      <main>
        <Outlet />
      </main>
    </Container>
  );
};

export default Layout;
