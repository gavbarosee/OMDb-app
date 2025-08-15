import { Routes, Route } from "react-router-dom";
import { ErrorBoundary } from "react-error-boundary";

import { HomePage, MovieDetailPage, ErrorFallback } from "./components";

function App() {
  return (
    <ErrorBoundary
      FallbackComponent={ErrorFallback}
      onError={(error, errorInfo) => {
        if (process.env.NODE_ENV === "development") {
          console.error(
            "App Error Boundary caught an error:",
            error,
            errorInfo
          );
        }
      }}
    >
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/movie/:imdbId" element={<MovieDetailPage />} />
      </Routes>
    </ErrorBoundary>
  );
}

export default App;
