import styled from "styled-components";
import { mixins } from "../../theme/utils";

export const ErrorContainer = styled.div`
  ${mixins.centeredFlex};
  flex-direction: column;
  ${mixins.adaptivePadding};
  text-align: center;
  min-height: 300px;
  gap: ${({ theme }) => theme.spacing.lg};
`;

export const ErrorTitle = styled.h1`
  ${mixins.scalingText("xl", "xxl")};
  font-weight: ${({ theme }) => theme.typography.fontWeight.bold};
  color: ${({ theme }) => theme.colors.error};
  margin: 0;
`;

export const ErrorMessage = styled.p`
  font-size: ${({ theme }) => theme.typography.fontSize.lg};
  color: ${({ theme }) => theme.colors.text.secondary};
  max-width: 600px;
  line-height: 1.6;
  margin: 0;
`;

export const RetryButton = styled.button`
  background-color: ${({ theme }) => theme.colors.primary};
  color: white;
  border: none;
  border-radius: ${({ theme }) => theme.borderRadius.md};
  padding: ${({ theme }) => theme.spacing.md} ${({ theme }) => theme.spacing.xl};
  font-size: ${({ theme }) => theme.typography.fontSize.md};
  font-weight: ${({ theme }) => theme.typography.fontWeight.medium};
  cursor: pointer;
  transition: all 0.2s ease-in-out;

  &:hover {
    background-color: ${({ theme }) => theme.colors.primary}dd;
    transform: translateY(-1px);
  }

  &:active {
    transform: translateY(0);
  }

  ${mixins.accessibleFocus};
`;

export const ErrorDetails = styled.details`
  margin-top: ${({ theme }) => theme.spacing.lg};
  text-align: left;
  max-width: 800px;
  width: 100%;

  summary {
    cursor: pointer;
    font-weight: ${({ theme }) => theme.typography.fontWeight.medium};
    color: ${({ theme }) => theme.colors.text.secondary};
    margin-bottom: ${({ theme }) => theme.spacing.sm};
  }

  pre {
    background-color: ${({ theme }) => theme.colors.surface};
    padding: ${({ theme }) => theme.spacing.md};
    border-radius: ${({ theme }) => theme.borderRadius.sm};
    font-size: ${({ theme }) => theme.typography.fontSize.sm};
    color: ${({ theme }) => theme.colors.error};
    overflow-x: auto;
    white-space: pre-wrap;
    word-break: break-word;
  }
`;
