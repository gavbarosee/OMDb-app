import type { ReactNode, FC } from "react";
import {
  ThemeProvider as StyledThemeProvider,
  createGlobalStyle,
} from "styled-components";
import { theme } from "./theme";

const GlobalStyles = createGlobalStyle`
  * {
    box-sizing: border-box;
  }

  body {
    margin: 0;
    padding: 0;
    font-family: ${(props) => props.theme.typography.fontFamily.primary};
    font-size: ${(props) => props.theme.typography.fontSize.md};
    line-height: 1.5;
    color: ${(props) => props.theme.colors.text.primary};
    background-color: ${(props) => props.theme.colors.background};
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
  }

  h1, h2, h3, h4, h5, h6 {
    margin: 0 0 ${(props) => props.theme.spacing.md} 0;
    color: ${(props) => props.theme.colors.text.primary};
  }

  p {
    margin: 0 0 ${(props) => props.theme.spacing.md} 0;
  }

  a {
    color: ${(props) => props.theme.colors.primary};
    text-decoration: none;
    
    &:hover {
      text-decoration: underline;
    }
  }

  button {
    font-family: inherit;
    cursor: pointer;
  }

  input, textarea {
    font-family: inherit;
  }
`;

interface ThemeProviderProps {
  children: ReactNode;
}

export const ThemeProvider: FC<ThemeProviderProps> = ({ children }) => {
  return (
    <StyledThemeProvider theme={theme}>
      <GlobalStyles />
      {children}
    </StyledThemeProvider>
  );
};
