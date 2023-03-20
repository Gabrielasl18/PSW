import { createGlobalStyle } from "styles-components";

const GlobalStyle = createGlobalStyle`

  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
}

  body {
    width: 100vw;
    height: 100vh;
    backgrounf-color: #ffff;
  }
`;

export default GlobalStyle;