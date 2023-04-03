import { createGlobalStyle } from 'styled-components';

import MontserratWoff from '../assets/fonts/MontserratAlt1-Bold.woff';
import MontserratWoff2 from '../assets/fonts/MontserratAlt1-Bold.woff2';

declare module 'styled-components' {
  interface DefaultTheme {
    colors: {
      background: string,
      inputBackground: string,
      primary: {
        lighter: string,
        light: string,
        main: string,
        dark: string,
        darker: string,
      },
      danger: string,
      text: {
        primary: string,
        secondary: string,
        label: string,
      }
    };
    boxShadow: string
  }
}

export const GlobalStyles = createGlobalStyle`

  @font-face {
      font-family: "Montserrat";
      font-weight: 700;
      font-style: normal;
      src: url('${MontserratWoff2}') format("woff2"),
            url('${MontserratWoff}') format("woff");
  }

  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    font-family: 'Inter', sans-serif;
  }

  html {
    height: 100%;
  }

  body {
    background: ${({  theme }) => theme.colors.background};
    color: ${({ theme }) => theme.colors.text.primary};
    height: 100%;
  }

  button {
    cursor: pointer;
    font-size: 1rem;
    color: ${({ theme }) => theme.colors.text.primary};
  }

  #root {
    height: 100%;
  }
`;
