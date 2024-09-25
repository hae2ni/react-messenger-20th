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
    font-family: "Apple SD Gothic Neo", sans-serif;
    font-size: 24px;
    font-weight: bold;
    line-height: 100%;
  `,
  bold18: css`
    font-family: "Apple SD Gothic Neo", sans-serif;
    font-size: 18px;
    font-weight: bold;
    line-height: 100%;
  `,
  medium16: css`
    font-family: "Apple SD Gothic Neo", sans-serif;
    font-size: 16px;
    font-weight: normal;
    line-height: 120%;
  `,
  medium14: css`
    font-family: "Apple SD Gothic Neo", sans-serif;
    font-size: 14px;
    font-weight: normal;
    line-height: 132%;
  `,
  bold12: css`
    font-family: "Apple SD Gothic Neo", sans-serif;
    font-size: 12px;
    font-weight: bold;
    line-height: 100%;
  `,
  medium12: css`
    font-family: "Apple SD Gothic Neo", sans-serif;
    font-size: 12px;
    font-weight: normal;
    line-height: 100%;
  `,
};

const theme: Pick<DefaultTheme, "colors" | "fonts"> = {
  colors,
  fonts,
};

export default theme;
