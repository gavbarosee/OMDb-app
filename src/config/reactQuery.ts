import { QueryClient } from "@tanstack/react-query";

export const REACT_QUERY_CONFIG = {
  STALE_TIME: 5 * 60 * 1000, // 5 mins stale time
  RETRY_COUNT: 1, // retry attempts on failed queries
  CACHE_TIME: 30 * 60 * 1000, // 30 mins cache time for unused data
} as const;

export const createQueryClient = (): QueryClient => {
  return new QueryClient({
    defaultOptions: {
      queries: {
        staleTime: REACT_QUERY_CONFIG.STALE_TIME,
        retry: REACT_QUERY_CONFIG.RETRY_COUNT,
        gcTime: REACT_QUERY_CONFIG.CACHE_TIME,
      },
    },
  });
};

export const queryClient = createQueryClient();
