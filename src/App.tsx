import { Routes, Route } from "react-router-dom";

import { HomePage, MovieDetailPage } from "./components";

function App() {
  return (
    <Routes>
      <Route path="/" element={<HomePage />} />
      <Route path="/movie/:imdbId" element={<MovieDetailPage />} />
    </Routes>
  );
}

export default App;
