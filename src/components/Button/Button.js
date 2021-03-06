import React from 'react';
import styled from 'styled-components';

const Button = ({ text, primary, full, onClick }) => {
  return (
    <ButtonComponent primary={primary} full={full} onClick={onClick}>
      {text}
    </ButtonComponent>
  );
};

const ButtonComponent = styled.button`
  width: ${({ full }) => (full ? '100%' : 'unset')};
  border: none;
  margin: 5px;
  padding: 10px 20px;
  border-radius: 5px;
  font-family: inherit;
  background-color: ${({ primary }) => (primary ? '#f6f6f4' : '#f6f6f433')};
  color: ${({ primary }) => (primary ? '#111' : '#f6f6f4')};
  cursor: pointer;

  &:hover {
    background-color: ${({ primary }) => (primary ? '#f6f6f4cc' : '#f6f6f41a')};
    transition: all 0.3s ease;
  }

  &:focus {
    outline: none;
  }
`;

export default Button;
