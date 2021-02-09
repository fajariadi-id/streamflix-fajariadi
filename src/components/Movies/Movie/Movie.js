import React from 'react';
import Button from '../../Button/Button';
import { Card, Poster, CardInfo, Price, BtnContainer } from './Movie.element';
const Movie = ({ poster, title, rating }) => {
  const pricing = () => {
    if (rating < 4) return 'Rp 3.500';
    if (rating < 7) return 'Rp 8.250';
    if (rating < 9) return 'Rp 16.350';
    if (rating > 9) return 'Rp 21.250';
  };

  return (
    <Card>
      <Poster className='card__img' src={poster} alt={title} />

      <CardInfo>
        <h2>{title}</h2>
        <Price>{pricing()}</Price>

        <BtnContainer>
          <Button primary text='Buy' />
          <Button text='More Info' />
        </BtnContainer>
      </CardInfo>
    </Card>
  );
};

export default Movie;
