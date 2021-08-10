import { createGlobalStyle } from 'styled-components';
import { normalize } from 'styled-normalize';

export const GlobalStyle = createGlobalStyle`
  * {
    box-sizing: border-box;
  }

  ${normalize}

  html,
  body {
    margin: 0;
    padding: 0;
    font-family: ${({ theme }) => theme.fontFamily};
  }

  /* Full height layout */
  html, body {
    display: flex;
    min-height: 100vh;
    width: 100%;
  }
  #__next {
    flex: 1;
    display: flex;
    flex-direction: column;
  }

  ::-webkit-scrollbar-track {
    background: ${({ theme }) => theme.colors.tertiary.main.color}
  }
  ::-webkit-scrollbar {
    width: 10px;
    height: 2px;
  }
  ::-webkit-scrollbar-thumb {
    background: ${({ theme }) => theme.colors.tertiary.light.color};
    border-radius: 30px;
  }
`;
