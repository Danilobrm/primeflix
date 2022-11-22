import { createGlobalStyle } from 'styled-components';

export default createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    outline: none;
    box-sizing: border-box;
    }

    body {
      font-family: sans-serif;
    }

    .app {
      display: flex;
      width: 100%;
      justify-content: center;
      align-items: center;
      flex-direction: column;
    }
`;
