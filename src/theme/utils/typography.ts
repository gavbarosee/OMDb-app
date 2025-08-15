import { css } from "styled-components";

export const typography = {
  heading: (level: 1 | 2 | 3 | 4 | 5 | 6 = 1) => css`
    font-family: ${({ theme }) => theme.typography.fontFamily.primary};
    font-weight: ${({ theme }) => theme.typography.fontWeight.bold};
    line-height: 1.2;
    margin: 0 0 ${({ theme }) => theme.spacing.md} 0;
    color: ${({ theme }) => theme.colors.text.primary};

    ${level === 1 &&
    css`
      font-size: ${({ theme }) => theme.typography.fontSize.xxl};
    `}

    ${level === 2 &&
    css`
      font-size: ${({ theme }) => theme.typography.fontSize.xl};
    `}
    
    ${level === 3 &&
    css`
      font-size: ${({ theme }) => theme.typography.fontSize.lg};
    `}
    
    ${level >= 4 &&
    css`
      font-size: ${({ theme }) => theme.typography.fontSize.md};
    `}
  `,

  body: css`
    font-family: ${({ theme }) => theme.typography.fontFamily.primary};
    font-size: ${({ theme }) => theme.typography.fontSize.md};
    font-weight: ${({ theme }) => theme.typography.fontWeight.normal};
    line-height: 1.5;
    color: ${({ theme }) => theme.colors.text.primary};
  `,

  caption: css`
    font-family: ${({ theme }) => theme.typography.fontFamily.primary};
    font-size: ${({ theme }) => theme.typography.fontSize.sm};
    font-weight: ${({ theme }) => theme.typography.fontWeight.normal};
    line-height: 1.4;
    color: ${({ theme }) => theme.colors.text.secondary};
  `,
};
