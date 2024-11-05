import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { getFindByIdMovie } from 'services/moviesApi';

const MovieDetails = () => {
  const [filmId, setFilmId] = useState([]);

  const { movieId } = useParams();

  useEffect(() => {
    const getFilm = async () => {
      const movie = await getFindByIdMovie(movieId);
      setFilmId(movie);
    };
    getFilm();
  }, [filmId]);

  return <div>getFindByIdMovie$`{filmId}`</div>;
};

export default MovieDetails;
