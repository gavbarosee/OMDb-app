import { useNavigate, useLocation } from "react-router-dom";

interface LocationState {
  searchTerm?: string;
  fromSearch?: boolean;
}

export const useMovieNavigation = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const state = location.state as LocationState;

  const navigateBack = () => {
    if (state?.fromSearch && state?.searchTerm) {
      navigate(`/?search=${encodeURIComponent(state.searchTerm)}`);
    } else {
      navigate("/");
    }
  };

  return {
    navigateBack,
    fromSearch: state?.fromSearch || false,
    searchTerm: state?.searchTerm,
  };
};
