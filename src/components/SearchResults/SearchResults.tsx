import { useMemo } from "react";
import { ErrorBoundary } from "react-error-boundary";
import { MovieCard } from "../Card";
import { MinimalErrorFallback } from "../ErrorBoundary";
import { Spinner } from "../Spinner";
import type { MovieSearchItem } from "../../services/types";
import {
  ResultsContainer,
  ResultsGrid,
  StatusMessage,
  ErrorMessage,
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
  const deduplicatedResults = useMemo(() => {
    if (!results) return undefined;

    const seen = new Set<string>();
    return results.filter((movie) => {
      if (seen.has(movie.imdbID)) {
        return false;
      }
      seen.add(movie.imdbID);
      return true;
    });
  }, [results]);

  if (isLoading) {
    return (
      <ResultsContainer>
        <Spinner loading={isLoading} aria-label="Loading search results" />
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

  if (!deduplicatedResults || deduplicatedResults.length === 0) {
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
        Found {deduplicatedResults.length} result
        {deduplicatedResults.length !== 1 ? "s" : ""} for "{searchTerm}"
      </StatusMessage>
      <ErrorBoundary
        FallbackComponent={MinimalErrorFallback}
        onError={(error) => {
          if (process.env.NODE_ENV === "development") {
            console.error("SearchResults rendering error:", error);
          }
        }}
      >
        <ResultsGrid
          role="grid"
          aria-label={`Search results for ${searchTerm}`}
        >
          {deduplicatedResults.map((movie, index) => (
            <MovieCard
              key={`${movie.imdbID}-${index}`}
              movie={movie}
              onClick={onMovieClick}
            />
          ))}
        </ResultsGrid>
      </ErrorBoundary>
    </ResultsContainer>
  );
};
