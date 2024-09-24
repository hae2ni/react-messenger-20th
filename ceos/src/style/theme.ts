import { css, DefaultTheme } from "styled-components";

const colors = {
  primary: "#FEE900",
  secondary: "#FE5C47",
  profile1: "#94BFE7",
  profile2: "#C4DBF1",

  black: "#191919",
  gray500: "#8E919A",
  gray300: "#ADB3BC",
  gray200: "#D1D5DB",
  gray100: "#EAEBF0",

  white: "#FBFBFA",
};

const fonts = {
  bold24: css`
    font-family: "Apple SD Gothic Neo";
    font-size: 24px;
    line-height: 100%;
  `,
};

const theme: Pick<DefaultTheme, "colors" | "fonts"> = {
  colors,
  fonts,
};

export default theme;
