import React from 'react';
import Button from '../../Button/Button';
import { Card, Poster, CardInfo, Price, BtnContainer } from './Movie.element';
import { Link } from 'react-router-dom';

export const pricing = (rating) => {
  if (rating < 4) return 'Rp 3.500';
  if (rating < 7) return 'Rp 8.250';
  if (rating < 9) return 'Rp 16.350';
  if (rating > 9) return 'Rp 21.250';
};

export const slug = (title) => title.toLowerCase().split(' ').join('-');

const Movie = ({ poster, title, rating, id }) => {
  return (
    <Card>
      <Poster src={poster} alt={title} />

      <CardInfo>
        <h2>{title}</h2>
        <Price>{pricing(rating)}</Price>

        <BtnContainer>
          <Button primary text='Buy' />
          <Link to={`/movie/${id}-${slug(title)}`}>
            <Button text='More Info' />
          </Link>
        </BtnContainer>
      </CardInfo>
    </Card>
  );
};

export default Movie;
