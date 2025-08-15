import { useState } from "react";
import "./App.css";
import { useMovieSearch, useMovieDetails } from "./hooks/useMovies";

function App() {
  const [searchTerm, setSearchTerm] = useState("batman");
  const {
    data: searchData,
    isLoading: isSearchLoading,
    error: searchError,
    isFetching: isSearchFetching,
  } = useMovieSearch(searchTerm);

  const {
    data: detailsData,
    isLoading: isDetailsLoading,
    error: detailsError,
    isFetching: isDetailsFetching,
  } = useMovieDetails("tt0372784");

  console.log("search state:", {
    isLoading: isSearchLoading,
    isFetching: isSearchFetching,
    hasData: !!searchData,
    error: searchError?.message,
  });

  console.log("details state:", {
    isLoading: isDetailsLoading,
    isFetching: isDetailsFetching,
    hasData: !!detailsData,
    error: detailsError?.message,
  });

  if (searchData) {
    console.log("search results:", searchData);
  }
  if (detailsData) {
    console.log("movie details:", detailsData);
  }

  return (
    <>
      <button onClick={() => setSearchTerm("batman")}>Search</button>
    </>
  );
}

export default App;
