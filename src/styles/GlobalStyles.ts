import { createGlobalStyle } from 'styled-components';

export default createGlobalStyle`
  :root {
    font-size: 62.5%;
  }

  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    outline: none;
  }

  body {
    background: #f0f5f4;
    -webkit-font-smoothing: antialiased;
  }

  body, input, button, textarea {
    font: 400 1.6rem 'Poppins', sans-serif;
    color: #212121;
  }

  button {
    cursor: pointer;
  }
`;
