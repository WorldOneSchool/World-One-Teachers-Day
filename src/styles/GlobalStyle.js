import { createGlobalStyle } from 'styled-components';

const GlobalStyle = createGlobalStyle`
  * {
    margin: 0; padding: 0; box-sizing: border-box;
  }
  body {
    background: ${p => p.theme.colors.background};
    color: ${p => p.theme.colors.text};
    font-family: ${p => p.theme.fonts.body};
    min-height: 100vh;
    overflow-x: hidden;
  }
  a {
    color: inherit;
    text-decoration: none;
    transition: color 0.2s;
  }
  ::selection {
    background: ${p => p.theme.colors.primary}44;
  }
`;

export default GlobalStyle;