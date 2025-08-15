import "styled-components";

declare module "styled-components" {
  export interface DefaultTheme {
    colors: {
      primary: string;
      secondary: string;
      background: string;
      surface: string;
      text: {
        primary: string;
        secondary: string;
        disabled: string;
      };
      error: string;
    };
    spacing: {
      sm: string;
      md: string;
      lg: string;
      xl: string;
    };
    typography: {
      fontFamily: {
        primary: string;
      };
      fontSize: {
        sm: string;
        md: string;
        lg: string;
        xl: string;
        xxl: string;
      };
      fontWeight: {
        normal: number;
        medium: number;
        bold: number;
      };
    };
    breakpoints: {
      mobile: string;
      tablet: string;
      desktop: string;
      wide: string;
    };
    shadows: {
      sm: string;
      md: string;
    };
    borderRadius: {
      sm: string;
      md: string;
      lg: string;
    };
  }
}
