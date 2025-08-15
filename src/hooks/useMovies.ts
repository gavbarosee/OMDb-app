import { useQuery } from "@tanstack/react-query";
import { omdbService } from "../services/omdb";
import type { MovieSearchResponse, MovieDetails } from "../services/types";

export const useMovieSearch = (query: string, enabled = !!query) => {
  return useQuery<MovieSearchResponse>({
    queryKey: ["movies", "search", query],
    queryFn: () => omdbService.searchMovies(query),
    enabled,
  });
};

export const useMovieDetails = (imdbId: string, enabled = !!imdbId) => {
  return useQuery<MovieDetails>({
    queryKey: ["movies", "details", imdbId],
    queryFn: () => omdbService.getMovieDetails(imdbId),
    enabled,
  });
};
