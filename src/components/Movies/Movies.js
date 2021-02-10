import React, { useEffect, useState } from 'react';
import Movie from './Movie/Movie';
import { Text, CardContainer, Loading } from './Movies.element';
import InfiniteScroll from 'react-infinite-scroll-component';
import { Container } from './MovieInfo/MovieInfo.element';

export const IMG_PATH = 'https://image.tmdb.org/t/p/w300';

const Movies = ({ onBuy }) => {
  const [movies, setMovies] = useState([]);
  const [page, setPage] = useState(1);
  const [totalPage, setTotalPage] = useState(0);
  const [isLoading, setLoading] = useState(true);

  // movies & image end point
  const MOVIES_URL = `https://api.themoviedb.org/3/movie/now_playing?api_key=${process.env.REACT_APP_TMDB_PUBLIC_KEY}&language=en-US&page=${page}&region=ID`;

  useEffect(() => {
    const fetchMovies = async () => {
      setLoading(true);
      const res = await fetch(MOVIES_URL);
      const { results, total_pages } = await res.json();
      setMovies((prevMovies) => prevMovies.concat(results));
      setTotalPage(total_pages);
      setLoading(false);
    };

    fetchMovies();
  }, [MOVIES_URL]);

  return (
    <Container>
      <InfiniteScroll
        style={CardContainer}
        dataLength={movies.length}
        next={() => setPage((prevPage) => prevPage + 1)}
        hasMore={page <= totalPage}
      >
        {movies.map((movie) => (
          <Movie
            key={movie.id}
            id={movie.id}
            poster={IMG_PATH + movie.poster_path}
            title={movie.title}
            rating={movie.vote_average}
            onBuy={onBuy}
          />
        ))}
      </InfiniteScroll>

      {isLoading ? (
        <Loading>Loading...</Loading>
      ) : (
        <Text>Hooray! You've seen all Now Playing movies in Indonesia.</Text>
      )}
    </Container>
  );
};

export default Movies;
