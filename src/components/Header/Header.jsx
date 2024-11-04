import { Link, HeaderEl } from './Header.styled';

const Header = () => {
  return (
    <nav>
      <HeaderEl>
        <Link to="/">Home</Link>
        <Link to="/movies">Movies</Link>
      </HeaderEl>
    </nav>
  );
};

export default Header;
