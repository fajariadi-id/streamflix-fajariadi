import styled from 'styled-components';

export const Container = styled.div`
  width: 100%;
  max-width: 1100px;
  margin: 0 auto;
  padding: 0 2rem;
`;

export const Wrapper = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: flex-start;
  gap: 50px;

  @media (max-width: 800px) {
    flex-wrap: wrap;
    justify-content: center;
  }
`;

export const Section = styled.h3`
  margin: 30px 0 10px;
`;

export const MovieDetail = styled.div`
  width: 100%;
  max-width: 400px;
`;

export const BtnContainer = styled.div`
  padding: 1rem 1.5rem 1rem 1rem;
  border: 1px solid #f6f6f4;
  border-radius: 5px;
  position: sticky;
  top: 10px;
`;

export const Poster = styled.img`
  border-radius: 5px;
  position: sticky;
  top: 10px;
`;

export const Price = styled.h2`
  border-bottom: 1px solid #333;
  padding-bottom: 20px;
`;
