import styled from "styled-components";
import { media, typography } from "../theme";

export const Title = styled.h1`
  ${typography.heading(1)}
  color: ${({ theme }) => theme.colors.primary};
  margin-bottom: ${({ theme }) => theme.spacing.md};

  /* Mobile: smaller font size */
  font-size: ${({ theme }) => theme.typography.fontSize.xl};

  /* Tablet and up: larger font size */
  ${media.tablet`
    font-size: ${({ theme }) => theme.typography.fontSize.xxl};
    margin-bottom: ${({ theme }) => theme.spacing.lg};
  `}

  /* Desktop: even larger if needed */
  ${media.desktop`
    font-size: 2rem;
  `}
`;
