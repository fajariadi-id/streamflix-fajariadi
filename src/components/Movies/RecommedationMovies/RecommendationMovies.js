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

export const Wrapper = styled.div`
  display: flex;
  flex-wrap: wrap;
  margin-bottom: 5rem;
  justify-content: center;
`;

export const CardSm = styled(Card)`
  max-width: 150px;
  border-radius: 3px;
`;

export const PosterSm = styled(Poster)`
  border-radius: 0 0 3px 3px;
`;

export const CardInfoSm = styled(CardInfo)`
  padding: 5px;
`;

export const PriceSm = styled(Price)`
  font-size: 14px;
`;

export default RecommendationMovies;
