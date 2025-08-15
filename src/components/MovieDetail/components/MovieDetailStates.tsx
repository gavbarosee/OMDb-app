import React from "react";
import { Container } from "../../Container";
import { Spinner } from "../../Spinner";
import {
  LoadingContainer,
  ErrorContainer,
  BackButton,
} from "../MovieDetail.styles";

interface MovieDetailLoadingProps {
  message?: string;
}

interface MovieDetailErrorProps {
  title: string;
  description?: string;
  onBack: () => void;
}

export const MovieDetailLoading: React.FC<MovieDetailLoadingProps> = ({
  message = "Loading movie details...",
}) => (
  <Container>
    <LoadingContainer>
      <Spinner loading={true} size={40} aria-label={message} />
    </LoadingContainer>
  </Container>
);

export const MovieDetailError: React.FC<MovieDetailErrorProps> = ({
  title,
  description,
  onBack,
}) => (
  <Container>
    <ErrorContainer>
      <div>{title}</div>
      {description && <div>{description}</div>}
      <BackButton onClick={onBack}>← Back to Search</BackButton>
    </ErrorContainer>
  </Container>
);
