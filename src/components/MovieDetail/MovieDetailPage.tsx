import React from "react";
import { useParams } from "react-router-dom";
import { ErrorBoundary } from "react-error-boundary";
import { useMovieDetails } from "../../hooks/useMovies";
import { Container } from "../Container";
import { MinimalErrorFallback } from "../ErrorBoundary";
import { useMovieNavigation } from "./hooks/useMovieNavigation";
import {
  MoviePoster,
  MovieMetaInfo,
  MovieAdditionalInfo,
  MovieDetailLoading,
  MovieDetailError,
} from "./components";
import {
  Content,
  DetailsSection,
  Title,
  Plot,
  BackButton,
} from "./MovieDetail.styles";

export const MovieDetailPage: React.FC = () => {
  const { imdbId } = useParams<{ imdbId: string }>();
  const { navigateBack } = useMovieNavigation();

  const {
    data: movieDetails,
    isLoading,
    error,
  } = useMovieDetails(imdbId || "", !!imdbId);

  if (!imdbId) {
    return <MovieDetailError title="Invalid movie ID" onBack={navigateBack} />;
  }

  if (isLoading) {
    return <MovieDetailLoading />;
  }

  if (error || !movieDetails) {
    return (
      <MovieDetailError
        title="Failed to load movie details"
        description="Please try again later"
        onBack={navigateBack}
      />
    );
  }

  return (
    <Container>
      <main id="main-content">
        <BackButton onClick={navigateBack}>← Back to Search</BackButton>

        <ErrorBoundary
          FallbackComponent={MinimalErrorFallback}
          onError={(error) => {
            if (process.env.NODE_ENV === "development") {
              console.error("MovieDetail rendering error:", error);
            }
          }}
        >
          <Content>
            <MoviePoster
              posterUrl={movieDetails.Poster}
              title={movieDetails.Title}
            />

            <DetailsSection>
              <Title>{movieDetails.Title}</Title>

              <MovieMetaInfo
                year={movieDetails.Year}
                rated={movieDetails.Rated}
                runtime={movieDetails.Runtime}
                genre={movieDetails.Genre}
              />

              {movieDetails.Plot && movieDetails.Plot !== "N/A" && (
                <Plot>{movieDetails.Plot}</Plot>
              )}

              <MovieAdditionalInfo movieDetails={movieDetails} />
            </DetailsSection>
          </Content>
        </ErrorBoundary>
      </main>
    </Container>
  );
};
