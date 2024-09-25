import reset from "styled-reset";
import { createGlobalStyle } from "styled-components";
import { rowFlex } from "./commonStyle";

export const GlobalStyle = createGlobalStyle`
${reset}

* {
  box-sizing: border-box;
}

#root {
${rowFlex}
width: 100vw;
height: 100vh;

  }


  html, body {
    min-width: 375px;
    min-height: 812px;
    margin: 0;
    padding: 0;
  
  }

a {
  cursor: pointer;
  color: inherit;
  text-decoration: none;
}

button {
  cursor: pointer;
  font: inherit;
  background: none;
  border: none;
}

html {
  @font-face {
  font-family: 'Apple SD Gothic Neo';
  font-weight: normal;
  font-style: normal;
  src: url('https://cdn.jsdelivr.net/gh/fonts-archive/AppleSDGothicNeo/AppleSDGothicNeo.css');
  }

}
`;
