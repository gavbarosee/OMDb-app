import styled from "styled-components";
import { mixins } from "../../theme";

export const ResultsContainer = styled.div`
  width: 100%;
  margin-top: ${({ theme }) => theme.spacing.lg};
`;

export const ResultsGrid = styled.div`
  ${mixins.adaptiveGrid(1, 2, 3, 4)}
`;

export const StatusMessage = styled.div`
  ${mixins.centeredMessage}
  color: ${({ theme }) => theme.colors.text.secondary};
`;

export const ErrorMessage = styled(StatusMessage)`
  color: ${({ theme }) => theme.colors.error || theme.colors.text.primary};
`;
