import React from "react";
import {
  PosterSection,
  Poster,
  PlaceholderPoster,
} from "../MovieDetail.styles";

interface MoviePosterProps {
  posterUrl: string;
  title: string;
}

export const MoviePoster: React.FC<MoviePosterProps> = ({
  posterUrl,
  title,
}) => {
  const hasPoster = posterUrl && posterUrl !== "N/A";

  return (
    <PosterSection>
      {hasPoster ? (
        <Poster src={posterUrl} alt={`${title} poster`} />
      ) : (
        <PlaceholderPoster>No Image Available</PlaceholderPoster>
      )}
    </PosterSection>
  );
};
