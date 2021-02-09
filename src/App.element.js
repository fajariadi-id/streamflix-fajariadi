import { createGlobalStyle } from 'styled-components';

export const GlobalStyle = createGlobalStyle`

  *, *::after, *::before {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  body {
    background-color: #111;
    color: #f6f6f4;
    font-family: 'Roboto', sans-serif;
  }

  h1, h2, h3, h4 {
    font-family: 'Poppins', sans-serif;
    line-height: 1;
  }
`;
