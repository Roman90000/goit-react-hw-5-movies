import styled from 'styled-components';
import { Link } from 'react-router-dom';

export const MovieLink = styled(Link)`
  &:hover::after {
    content: '';
    background-image: ${props =>
      `url('https://image.tmdb.org/t/p/w500/${props.poster_path}')`};

    background-size: cover;
    width: 400px;
    height: 560px;
    display: block;
    border-radius: 15px;
    border: 1px solid rgba(43, 134, 197);
    box-shadow: 0 2px 4px rgba(0, 0, 0, 0.3);
    top: 15%;
    right: 20%;
    color: #4f46e5;
    position: fixed;
  }
`;
