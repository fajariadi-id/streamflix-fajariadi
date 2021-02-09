import React, { useEffect, useState } from 'react';
import Movie from './Movie/Movie';
import { Card } from './Movie/Movie.element';
import { CardContainer } from './Movies.element';

const Movies = () => {
  const [movies, setMovies] = useState([]);

  const MOVIES_URL = `https://api.themoviedb.org/3/movie/now_playing?api_key=${process.env.REACT_APP_TMDB_PUBLIC_KEY}&language=en-US&page=1&region=ID`;
  const IMG_PATH = 'https://image.tmdb.org/t/p/w300';

  useEffect(() => {
    const fetchMovies = async () => {
      const res = await fetch(MOVIES_URL);
      const { results } = await res.json();
      setMovies(results);
    };

    fetchMovies();
  }, [MOVIES_URL]);

  return (
    <CardContainer>
      {movies.map((movie) => (
        <Movie
          key={movie.id}
          poster={IMG_PATH + movie.poster_path}
          title={movie.title}
          rating={movie.vote_average}
        />
      ))}
    </CardContainer>
  );
};

export default Movies;
