import styled from 'styled-components';

export const Nav = styled.nav`
  padding: 1rem;
  background-color: #000000cc;
  position: sticky;
  top: 0;
  z-index: 999;
  backdrop-filter: blur(10px);
  margin-bottom: 1rem;
  box-shadow: 0 7px 10px rgba(0, 0, 0, 0.2);
`;

export const Logo = styled.h1`
  color: #d81f26;
`;

export const Container = styled.div`
  width: 100%;
  max-width: 1100px;
  margin: 0 auto;
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

export const User = styled.div`
  text-align: right;
  display: flex;
  gap: 20px;

  & > div > p {
    font-weight: 300;
  }
`;
