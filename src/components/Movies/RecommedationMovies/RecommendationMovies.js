import React, { useEffect, useState } from 'react';
import { Card, CardInfo, Poster, Price } from '../Movie/Movie.element';
import { IMG_PATH } from '../Movies';
import { pricing } from '../Movie/Movie';
import styled from 'styled-components';

const RecommendationMovies = ({ id }) => {
  const [movies, setMovies] = useState([]);

  useEffect(() => {
    const fetchRecommendationMovies = async () => {
      const res = await fetch(
        `https://api.themoviedb.org/3/movie/${id}/recommendations?api_key=${process.env.REACT_APP_TMDB_PUBLIC_KEY}&language=en-US&page=1`
      );

      const { results } = await res.json();

      setMovies(results);
    };

    fetchRecommendationMovies();
  }, [id]);

  return (
    <>
      {movies.length === 0 ? (
        <h3 style={{ textAlign: 'center' }}>No Recommendation Movies</h3>
      ) : (
        <h3 style={{ textAlign: 'center' }}>Recommendation Movies</h3>
      )}
      <Wrapper>
        {movies.map((movie) => (
          <Card key={movie.id}>
            <Poster src={IMG_PATH + movie.poster_path} alt={movie.title} />

            <CardInfo>
              <h4>{movie.title}</h4>
              <Price>Rp {pricing(movie.vote_average)}</Price>
            </CardInfo>
          </Card>
        ))}
      </Wrapper>
    </>
  );
};

export const Wrapper = styled.div`
  display: flex;
  flex-wrap: wrap;
  margin-bottom: 5rem;
  justify-content: center;
`;

export default RecommendationMovies;
