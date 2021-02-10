import React from 'react';
import Button from '../../Button/Button';
import { Card, Poster, CardInfo, Price, BtnContainer } from './Movie.element';
import { Link } from 'react-router-dom';

export const pricing = (rating) => {
  if (rating < 4) return 3500;
  if (rating < 7) return 8250;
  if (rating < 9) return 16350;
  if (rating > 9) return 21250;
};

export const slug = (title) => title.toLowerCase().split(' ').join('-');

const Movie = ({ poster, title, rating, id, onBuy }) => {
  return (
    <Card>
      <Poster src={poster} alt={title} />

      <span></span>

      <CardInfo>
        <h2>{title}</h2>
        <Price>Rp {pricing(rating)}</Price>

        <BtnContainer>
          <Button primary text='Buy' onClick={() => onBuy(pricing(rating))} />
          <Link to={`/movie/${id}-${slug(title)}`}>
            <Button text='More Info' />
          </Link>
        </BtnContainer>
      </CardInfo>
    </Card>
  );
};

export default Movie;
