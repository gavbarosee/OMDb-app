import React from "react";
import { MovieCard } from "../Card";
import type { MovieSearchItem } from "../../services/types";
import {
  ResultsContainer,
  ResultsGrid,
  StatusMessage,
  ErrorMessage,
  LoadingMessage,
} from "./SearchResults.styles";

export interface SearchResultsProps {
  results?: MovieSearchItem[];
  isLoading: boolean;
  error: Error | null;
  searchTerm: string;
  onMovieClick?: (movie: MovieSearchItem) => void;
}

export const SearchResults: React.FC<SearchResultsProps> = ({
  results,
  isLoading,
  error,
  searchTerm,
  onMovieClick,
}) => {
  if (isLoading) {
    return (
      <ResultsContainer>
        <LoadingMessage aria-live="polite" role="status">
          Loading...
        </LoadingMessage>
      </ResultsContainer>
    );
  }

  if (error) {
    return (
      <ResultsContainer>
        <ErrorMessage aria-live="assertive" role="alert">
          Error: {error.message}
        </ErrorMessage>
      </ResultsContainer>
    );
  }

  if (!results || results.length === 0) {
    return (
      <ResultsContainer>
        <StatusMessage>
          {searchTerm ? `No results found for "${searchTerm}"` : ""}
        </StatusMessage>
      </ResultsContainer>
    );
  }

  return (
    <ResultsContainer>
      <StatusMessage aria-live="polite" role="status">
        Found {results.length} result{results.length !== 1 ? "s" : ""} for "
        {searchTerm}"
      </StatusMessage>
      <ResultsGrid role="grid" aria-label={`Search results for ${searchTerm}`}>
        {results.map((movie) => (
          <MovieCard key={movie.imdbID} movie={movie} onClick={onMovieClick} />
        ))}
      </ResultsGrid>
    </ResultsContainer>
  );
};
