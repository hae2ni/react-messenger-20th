import reset from "styled-reset";
import { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`
${reset}

* {
  box-sizing: border-box;
}

#root {
    width: 375px;
    height: 812px;
    transform-origin: top left;
    transform: scale(${(window.innerWidth / 312).toFixed(2)});
  }

  html, body {
    margin: 0;
    padding: 0;
    width: 375px;
    height: 812px;
  
  }

a {
  color: inherit;
  text-decoration: none;
  cursor: pointer;
}

button {
  border: none;
  background: none;
  font: inherit;
  cursor: pointer;
}

html {
  @font-face {
  font-family: 'Apple SD Gothic Neo';
  font-style: normal;
  font-weight: normal;
  src: url('https://cdn.jsdelivr.net/gh/fonts-archive/AppleSDGothicNeo/AppleSDGothicNeo.css');
  }

}
`;
