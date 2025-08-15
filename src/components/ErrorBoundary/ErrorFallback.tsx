import React from "react";
import type { FallbackProps } from "react-error-boundary";
import { Container } from "../Container";
import {
  ErrorContainer,
  ErrorTitle,
  ErrorMessage,
  RetryButton,
  ErrorDetails,
} from "./ErrorFallback.styles.ts";

export const ErrorFallback: React.FC<FallbackProps> = ({
  error,
  resetErrorBoundary,
}) => {
  return (
    <Container>
      <ErrorContainer role="alert" aria-live="assertive">
        <ErrorTitle>Something went wrong</ErrorTitle>
        <ErrorMessage>
          Please try refreshing the page or contact support if the problem
          persists.
        </ErrorMessage>

        <RetryButton onClick={resetErrorBoundary}>Try Again</RetryButton>

        {process.env.NODE_ENV === "development" && (
          <ErrorDetails>
            <summary>Error Details (Development Only)</summary>
            <pre>{error.message}</pre>
            {error.stack && <pre>{error.stack}</pre>}
          </ErrorDetails>
        )}
      </ErrorContainer>
    </Container>
  );
};

export const MinimalErrorFallback: React.FC<FallbackProps> = ({
  error,
  resetErrorBoundary,
}) => {
  return (
    <ErrorContainer role="alert" aria-live="assertive">
      <ErrorMessage>Something went wrong loading this section.</ErrorMessage>
      <RetryButton onClick={resetErrorBoundary}>Retry</RetryButton>

      {process.env.NODE_ENV === "development" && (
        <ErrorDetails>
          <summary>Error Details</summary>
          <pre>{error.message}</pre>
        </ErrorDetails>
      )}
    </ErrorContainer>
  );
};
