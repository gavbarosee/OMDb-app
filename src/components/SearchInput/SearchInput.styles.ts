import styled from "styled-components";
import { mixins, media } from "../../theme";

export const StyledInput = styled.input`
  ${mixins.baseFormField}
  ${mixins.accessibleFocus}
  
  padding: ${({ theme }) => theme.spacing.md};
  font-size: ${({ theme }) => theme.typography.fontSize.md};
  margin: ${({ theme }) => theme.spacing.md} 0;

  /* Desktop: additional horizontal padding */
  ${media.desktop`
    padding: ${({ theme }) => theme.spacing.md} ${({ theme }) =>
    theme.spacing.lg};
  `}
`;
