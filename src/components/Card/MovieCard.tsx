import React, { useState } from "react";
import type { MovieSearchItem } from "../../services/types";
import {
  Card,
  CardImage,
  CardTitle,
  CardMeta,
  CardMetaItem,
  PlaceholderImage,
} from "./Card.styles";

export interface MovieCardProps {
  movie: MovieSearchItem;
  onClick?: (movie: MovieSearchItem) => void;
}

export const MovieCard: React.FC<MovieCardProps> = ({ movie, onClick }) => {
  const [imageError, setImageError] = useState(false);

  const handleClick = () => {
    onClick?.(movie);
  };

  const handleKeyDown = (event: React.KeyboardEvent) => {
    if (event.key === "Enter" || event.key === " ") {
      event.preventDefault();
      onClick?.(movie);
    }
  };

  const handleImageError = () => {
    setImageError(true);
  };

  const hasPoster = movie.Poster && movie.Poster !== "N/A" && !imageError;

  return (
    <Card
      onClick={handleClick}
      onKeyDown={handleKeyDown}
      tabIndex={onClick ? 0 : -1}
      role={onClick ? "button" : undefined}
      aria-label={`View details for ${movie.Title} (${movie.Year})`}
    >
      {hasPoster ? (
        <CardImage
          src={movie.Poster}
          alt={`${movie.Title} poster`}
          loading="lazy"
          onError={handleImageError}
        />
      ) : (
        <PlaceholderImage aria-hidden="true">
          No Image Available
        </PlaceholderImage>
      )}

      <CardTitle>{movie.Title}</CardTitle>

      <CardMeta>
        <CardMetaItem>{movie.Year}</CardMetaItem>
      </CardMeta>
    </Card>
  );
};
