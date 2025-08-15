import React from "react";
import { MetaInfo, MetaItem, Genre } from "../MovieDetail.styles";

interface MovieMetaInfoProps {
  year: string;
  rated: string;
  runtime: string;
  genre: string;
}

export const MovieMetaInfo: React.FC<MovieMetaInfoProps> = ({
  year,
  rated,
  runtime,
  genre,
}) => {
  return (
    <MetaInfo>
      <MetaItem>{year}</MetaItem>
      <MetaItem>{rated}</MetaItem>
      <MetaItem>{runtime}</MetaItem>
      {genre && genre !== "N/A" && <Genre>{genre}</Genre>}
    </MetaInfo>
  );
};
