import { createGlobalStyle } from 'styled-components';

export default createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    outline: 0;
    box-sizing: border-box;
  }

  body {
    background: #F3F3F3;
    -webkit-font-smoothing: antialiased;
    color: #222;
  }

  body, input, button {
    font-family: 'Roboto', sans-serif;
    font-size: 18px;
  }

  h1, h2, h3, h4, h5, h6, strong {
    font-weight: 500;
  }

  button {
    cursor: pointer;
  }

  ul {
    list-style: none;
  }
`;
