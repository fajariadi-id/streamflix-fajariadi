import styled from 'styled-components';

export const CardInfo = styled.div`
  position: absolute;
  bottom: 0;
  left: 0;
  right: 0;
  padding: 20px;
  background: linear-gradient(to top, #111, #11111100);
  transform: translateY(10%);
  opacity: 0;
  visibility: hidden;
  transition: all 0.5s ease 0.3s;
`;

export const Card = styled.div`
  margin: 10px;
  width: 100%;
  max-width: 300px;
  position: relative;
  border-radius: 10px;
  overflow: hidden;

  &:hover > ${CardInfo} {
    visibility: visible;
    transform: translateY(0);
    opacity: 1;
  }
`;

export const Poster = styled.img`
  display: block;
  width: 100%;
  border-radius: 0 0 10px 10px;
`;

export const Price = styled.span`
  display: block;
  margin: 10px 0 20px;
  font-size: 1.25rem;
  font-weight: 300;
`;

export const BtnContainer = styled.div`
  display: flex;
  justify-content: center;
`;
