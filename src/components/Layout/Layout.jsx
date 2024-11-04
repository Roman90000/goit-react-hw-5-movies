import { Outlet } from 'react-router-dom';
import { Container, HeaderEl, Link } from './Layout.styled';

const Layout = () => {
  return (
    <Container>
      <HeaderEl>
        <Link to="/">Home</Link>
        <Link to="/movies">Movies</Link>
      </HeaderEl>
      <main>
        <Outlet />
      </main>
    </Container>
  );
};

export default Layout;
