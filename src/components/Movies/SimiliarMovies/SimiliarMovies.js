import React, { useEffect, useState } from 'react';
import { pricing } from '../Movie/Movie';
import {
  CardSm,
  Wrapper,
  PosterSm,
  CardInfoSm,
  PriceSm,
} from '../RecommedationMovies/RecommendationMovies';
import { IMG_PATH } from '../Movies';

const SimiliarMovies = ({ id }) => {
  const [movies, setMovies] = useState([]);

  useEffect(() => {
    const fetchSimiliarMovies = async () => {
      const res = await fetch(
        `https://api.themoviedb.org/3/movie/${id}/similar?api_key=8474014efb37e489ad1a5299e6ae7a88&language=en-US&page=1`
      );
      const { results } = await res.json();

      setMovies(results);
    };
    fetchSimiliarMovies();
  }, [id]);
  return (
    <>
      {movies.length === 0 ? (
        <h3 style={{ textAlign: 'center' }}>No Similiar Movies</h3>
      ) : (
        <h3 style={{ textAlign: 'center' }}>Similiar Movies</h3>
      )}

      <Wrapper>
        {movies.map((movie) => (
          <CardSm key={movie.id}>
            <PosterSm src={IMG_PATH + movie.poster_path} alt={movie.title} />

            <CardInfoSm>
              <h4>{movie.title}</h4>
              <PriceSm>Rp {pricing(movie.vote_average)}</PriceSm>
            </CardInfoSm>
          </CardSm>
        ))}
      </Wrapper>
    </>
  );
};

export default SimiliarMovies;
