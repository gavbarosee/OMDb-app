import styled from "styled-components";
import { media } from "../theme";

export const Container = styled.div`
  /* Mobile first: base styles */
  padding: ${({ theme }) => theme.spacing.md};
  margin: 0 auto;
  text-align: center;
  width: 100%;

  /* Tablet and up: increase padding and add max-width */
  ${media.tablet`
    padding: ${({ theme }) => theme.spacing.lg};
    max-width: 768px;
  `}

  /* Desktop and up: larger max-width and padding */
  ${media.desktop`
    padding: ${({ theme }) => theme.spacing.xl};
    max-width: 1200px;
  `}
`;
