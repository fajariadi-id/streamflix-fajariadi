import React from 'react';
import styled from 'styled-components';

const Button = ({ text, disabled, primary }) => {
  return (
    <ButtonComponent disabled={disabled} primary={primary}>
      {text}
    </ButtonComponent>
  );
};

const ButtonComponent = styled.button`
  border: none;
  margin: 0 5px;
  padding: 10px 20px;
  border-radius: 5px;
  font-family: inherit;
  background-color: ${({ primary }) => (primary ? '#f6f6f4' : '#f6f6f433')};
  color: ${({ primary }) => (primary ? '#111' : '#f6f6f4')};
  cursor: ${({ disabled }) => (disabled ? 'not-allowed' : 'pointer')};

  &:hover {
    background-color: ${({ primary }) => (primary ? '#f6f6f4cc' : '#f6f6f41a')};
    transition: all 0.3s ease;
  }
`;

export default Button;
