import axios from 'axios';

axios.defaults.baseURL = 'https://api.themoviedb.org/3/';

const API_KEY = '458e45d7aa2e31ce183aa31a7b23a76b';

export const getTrending = async () => {
  const response = await axios.get(
    `https://api.themoviedb.org/3/trending/movie/day?api_key=${API_KEY}`
  );
  return response;
};

export const getFindByIdMovie = async id => {
  const response = await axios.get(
    `https://api.themoviedb.org/3/find/${id}?api_key=${API_KEY}&language=en-US`
  );
  return response;
};
