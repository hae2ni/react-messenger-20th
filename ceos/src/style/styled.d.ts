import "styled-components";

declare module "styled-components" {
  export interface DefaultTheme {
    colors: {
      primary: string;
      secondary: string;
      profile1: string;
      profile2: string;

      black: string;
      gray500: string;
      gray300: string;
      gray200: string;
      gray100: string;

      white: string;
    };

    fonts: {
      bold24: SerializedStyles;
      bold18: SerializedStyles;
      bold16: SerializedStyles;
      medium14: SerializedStyles;
      bold12: SerializedStyles;
      medium12: SerializedStyles;
    };
  }
}
