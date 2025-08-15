import React, { useState } from "react";
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
  const [imageError, setImageError] = useState(false);

  const handleImageError = () => {
    setImageError(true);
  };

  const hasPoster = posterUrl && posterUrl !== "N/A" && !imageError;

  return (
    <PosterSection>
      {hasPoster ? (
        <Poster
          src={posterUrl}
          alt={`${title} poster`}
          loading="lazy"
          onError={handleImageError}
        />
      ) : (
        <PlaceholderPoster>No Image Available</PlaceholderPoster>
      )}
    </PosterSection>
  );
};
