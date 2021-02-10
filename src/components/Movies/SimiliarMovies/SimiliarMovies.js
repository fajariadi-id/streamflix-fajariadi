import React, { useEffect, useState } from 'react';
import { pricing } from '../Movie/Movie';
import { Card, CardInfo, Poster, Price } from '../Movie/Movie.element';
import { Wrapper } from '../RecommedationMovies/RecommendationMovies';
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
      <h3 style={{ textAlign: 'center' }}>SimiliarMovies</h3>
      <Wrapper>
        {movies.map((movie) => (
          <Card key={movie.id}>
            <Poster src={IMG_PATH + movie.poster_path} alt={movie.title} />

            <CardInfo>
              <h2>{movie.title}</h2>
              <Price>{pricing(movie.vote_average)}</Price>
            </CardInfo>
          </Card>
        ))}
      </Wrapper>
    </>
  );
};

export default SimiliarMovies;
