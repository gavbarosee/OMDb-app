import { useEffect } from "react";

import "./App.css";
import { omdbService } from "./services/omdb";
function App() {
  useEffect(() => {
    omdbService
      .searchMovies("batman")
      .then((res) => console.log("res:", res))
      .catch((err) => console.error("error:", err.message));
  }, []);

  useEffect(() => {
    omdbService
      .getMovieDetails("tt0372784")
      .then((movieDetailsResponse) =>
        console.log("movieDetailsResponse:", movieDetailsResponse)
      )
      .catch((err) => console.error("error:", err.message));
  }, []);

  return (
    <>
      <h1>Hello World</h1>
    </>
  );
}

export default App;
