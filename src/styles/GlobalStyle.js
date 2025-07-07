import { createGlobalStyle } from 'styled-components';
import { COLORS } from './colors';

const GlobalStyle = createGlobalStyle`
  body {
    background: ${COLORS.white};
    color: #222;
    font-family: 'Inter', 'system-ui', 'Arial', sans-serif;
    margin: 0;
    padding: 0;
    min-height: 100vh;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
  }
  *, *::before, *::after {
    box-sizing: border-box;
  }
`;

export default GlobalStyle; 