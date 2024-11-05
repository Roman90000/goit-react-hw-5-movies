import { useEffect, useState } from 'react';
import { getTrending } from 'services/moviesApi';
import { MovieLink } from './Home.styled';

const Home = () => {
  const [films, setFilms] = useState([]);

  useEffect(() => {
    const trending = async () => {
      const trendingData = await getTrending();
      setFilms(trendingData.data.results);
    };

    trending();
  }, []);

  return (
    <div>
      <h1>Trending today</h1>
      <ul className="list-group w-25 mb-4">
        {films.map(film => (
          <MovieLink
            to={`/movies/${film.id}`}
            poster_path={film.poster_path}
            key={film.id}
            className="link-primary d-inline-flex  py-1 px-2 text-decoration-none border rounded-2 mb-2 text-black"
          >
            {film.original_title}
          </MovieLink>
        ))}
      </ul>
    </div>
  );
};

export default Home;
