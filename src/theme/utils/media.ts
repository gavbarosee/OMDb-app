import { css } from "styled-components";
import type { DefaultTheme, Interpolation } from "styled-components";

export const media = {
  mobile: (
    strings: TemplateStringsArray,
    ...interpolations: Interpolation<object>[]
  ) => css`
    @media (min-width: ${({ theme }: { theme: DefaultTheme }) =>
        theme.breakpoints.mobile}) {
      ${css(strings, ...interpolations)}
    }
  `,

  tablet: (
    strings: TemplateStringsArray,
    ...interpolations: Interpolation<object>[]
  ) => css`
    @media (min-width: ${({ theme }: { theme: DefaultTheme }) =>
        theme.breakpoints.tablet}) {
      ${css(strings, ...interpolations)}
    }
  `,

  desktop: (
    strings: TemplateStringsArray,
    ...interpolations: Interpolation<object>[]
  ) => css`
    @media (min-width: ${({ theme }: { theme: DefaultTheme }) =>
        theme.breakpoints.desktop}) {
      ${css(strings, ...interpolations)}
    }
  `,

  wide: (
    strings: TemplateStringsArray,
    ...interpolations: Interpolation<object>[]
  ) => css`
    @media (min-width: ${({ theme }: { theme: DefaultTheme }) =>
        theme.breakpoints.wide}) {
      ${css(strings, ...interpolations)}
    }
  `,
};
