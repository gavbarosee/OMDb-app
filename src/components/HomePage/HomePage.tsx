import { useState } from "react";
import { useNavigate, useSearchParams } from "react-router-dom";
import { useMovieSearch } from "../../hooks/useMovies";
import { useDebounce } from "../../hooks/useDebounce";
import { Container, Title, SearchInput, SearchResults } from "../";
import type { MovieSearchItem } from "../../services/types";

export const HomePage: React.FC = () => {
  const navigate = useNavigate();
  const [searchParams, setSearchParams] = useSearchParams();

  const urlSearchTerm = searchParams.get("search") || "";
  const [searchTerm, setSearchTerm] = useState(urlSearchTerm);

  const debouncedSearchTerm = useDebounce(searchTerm, 300);
  const {
    data: searchData,
    isLoading: isSearchLoading,
    error: searchError,
  } = useMovieSearch(debouncedSearchTerm, debouncedSearchTerm.length > 0);

  const handleSearchChange = (value: string) => {
    setSearchTerm(value);

    const newSearchParams = new URLSearchParams(searchParams);
    if (value.trim()) {
      newSearchParams.set("search", value);
    } else {
      newSearchParams.delete("search");
    }
    setSearchParams(newSearchParams);
  };

  const handleMovieClick = (movie: MovieSearchItem) => {
    navigate(`/movie/${movie.imdbID}`, {
      state: {
        searchTerm: debouncedSearchTerm,
        fromSearch: true,
      },
    });
  };

  return (
    <Container>
      <main id="main-content">
        <Title>OMDb Movie Search</Title>
        <section aria-label="Movie search">
          <SearchInput
            value={searchTerm}
            onChange={handleSearchChange}
            placeholder="Search for movies, TV shows, or games..."
          />
        </section>
        <section aria-label="Search results" aria-live="polite">
          <SearchResults
            results={searchData?.Search}
            isLoading={isSearchLoading}
            error={searchError}
            searchTerm={debouncedSearchTerm}
            onMovieClick={handleMovieClick}
          />
        </section>
      </main>
    </Container>
  );
};
