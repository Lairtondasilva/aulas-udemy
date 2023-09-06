import { createGlobalStyle } from 'styled-components';

export const GlobalStyles = createGlobalStyle`

  * {
    margin: 0;
    padding: 0;
  }

  body {
    font-size: 1.6rem;
    font-family: ${({ theme }) => theme.fonts.body};
  }

  html {
    font-size: 65.5%;
  }

  h1, h2, h3, h4, h5, h6 {
    font-family: ${({ theme }) => theme.fonts.heading};
    font-weight: bold;
  }

`;
