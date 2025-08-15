import { useState } from "react";
import "./App.css";
import { useMovieSearch } from "./hooks/useMovies";
import { useDebounce } from "./hooks/useDebounce";
import { Container, Title, SearchInput, SearchResults } from "./components";
import type { MovieSearchItem } from "./services/types";

function App() {
  const [searchTerm, setSearchTerm] = useState("");
  const debouncedSearchTerm = useDebounce(searchTerm, 300);
  const {
    data: searchData,
    isLoading: isSearchLoading,
    error: searchError,
  } = useMovieSearch(debouncedSearchTerm, debouncedSearchTerm.length > 0);

  const handleSearchChange = (value: string) => {
    setSearchTerm(value);
  };

  const handleMovieClick = (movie: MovieSearchItem) => {
    console.log("Movie clicked:", movie);
    // todo: nav to detail view
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
}

export default App;
