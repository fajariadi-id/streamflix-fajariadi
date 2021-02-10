import React, { useState, useEffect } from 'react';
import { FaStar } from 'react-icons/fa';
import Button from '../../Button/Button';
import { pricing } from '../Movie/Movie';
import { IMG_PATH } from '../Movies';
import RecommendationMovies from '../RecommedationMovies/RecommendationMovies';
import SimiliarMovies from '../SimiliarMovies/SimiliarMovies';
import {
  Container,
  Section,
  Wrapper,
  MovieDetail,
  BtnContainer,
  Poster,
  Price,
} from './MovieInfo.element';

const MovieInfo = ({ match, onBuy }) => {
  const [movie, setMovie] = useState({});
  const [genres, setGenres] = useState([]);
  const [cast, setCast] = useState([]);

  useEffect(() => {
    const fetchMovie = async () => {
      const res = await fetch(
        `https://api.themoviedb.org/3/movie/${match.params.id}?api_key=${process.env.REACT_APP_TMDB_PUBLIC_KEY}&language=en-US
        `
      );
      const data = await res.json();

      setMovie(data);
      setGenres(data.genres);
    };

    const fetchCast = async () => {
      const res = await fetch(
        `https://api.themoviedb.org/3/movie/${match.params.id}/credits?api_key=${process.env.REACT_APP_TMDB_PUBLIC_KEY}&language=en-US
        `
      );
      const { cast } = await res.json();

      setCast(cast);
    };

    fetchMovie();
    fetchCast();
  }, [match.params.id]);

  const artists = cast.map((artist) => artist.name).join(', ');

  const genre = genres.map((genre) => genre.name).join(', ');

  return (
    <Container>
      <Wrapper>
        <Poster src={IMG_PATH + movie.poster_path} alt={movie.title} />

        <MovieDetail>
          <h1>{movie.title}</h1>

          <div style={{ margin: '10px 0' }}>
            <span style={{ marginRight: '20px' }}>{movie.runtime} Minutes</span>
            <span>
              <FaStar style={{ color: 'orange' }} /> {movie.vote_average}
            </span>
          </div>

          <Price>Rp {pricing(movie.vote_average)}</Price>

          <Section>Overview</Section>
          <p>{movie.overview}</p>

          <Section>Genres</Section>
          <p>{genre}.</p>

          <Section>Cast</Section>
          <p>{artists}.</p>
        </MovieDetail>

        <BtnContainer>
          <Button
            text='Buy'
            primary
            full
            onClick={() => onBuy(pricing(movie.vote_average))}
          />
          <Button text='Trailer' full />
        </BtnContainer>
      </Wrapper>

      <RecommendationMovies id={match.params.id} />
      <SimiliarMovies id={match.params.id} />
    </Container>
  );
};

export default MovieInfo;
