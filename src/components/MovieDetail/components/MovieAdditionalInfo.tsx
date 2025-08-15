import React from "react";
import {
  AdditionalInfo,
  InfoItem,
  InfoLabel,
  InfoValue,
} from "../MovieDetail.styles";
import type { MovieDetails } from "../../../services/types";

interface MovieAdditionalInfoProps {
  movieDetails: MovieDetails;
}

interface InfoField {
  label: string;
  value: string;
  formatter?: (value: string) => string;
}

export const MovieAdditionalInfo: React.FC<MovieAdditionalInfoProps> = ({
  movieDetails,
}) => {
  const infoFields: InfoField[] = [
    { label: "Director", value: movieDetails.Director },
    { label: "Cast", value: movieDetails.Actors },
    { label: "Released", value: movieDetails.Released },
    { label: "Language", value: movieDetails.Language },
    { label: "Country", value: movieDetails.Country },
    {
      label: "IMDb Rating",
      value: movieDetails.imdbRating,
      formatter: (value) => `${value}/10`,
    },
    { label: "Awards", value: movieDetails.Awards },
    { label: "Box Office", value: movieDetails.BoxOffice },
  ];

  const validFields = infoFields.filter(
    (field) => field.value && field.value !== "N/A"
  );

  if (validFields.length === 0) {
    return null;
  }

  return (
    <AdditionalInfo>
      {validFields.map((field) => (
        <InfoItem key={field.label}>
          <InfoLabel>{field.label}</InfoLabel>
          <InfoValue>
            {field.formatter ? field.formatter(field.value) : field.value}
          </InfoValue>
        </InfoItem>
      ))}
    </AdditionalInfo>
  );
};
