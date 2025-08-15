import type { MovieSearchResponse, MovieDetails } from "./types";
import { env } from "../config/env";
import {
  validateHttpResponse,
  validateOMDbResponse,
  wrapUnknownError,
} from "./utils/http";
import { buildApiUrl } from "./utils/url";

class OMDbService {
  private readonly apiKey: string;
  private readonly baseUrl: string;

  constructor() {
    this.apiKey = env.omdbApiKey;
    this.baseUrl = env.omdbBaseUrl;

    if (!this.apiKey) {
      console.error("VITE_OMDB_API_KEY is not set in env variables");
    }
  }

  private async makeRequest<T>(url: string): Promise<T> {
    try {
      const response = await fetch(url);
      validateHttpResponse(response);

      const data = await response.json();
      validateOMDbResponse(data);

      return data;
    } catch (error) {
      wrapUnknownError(error);
    }
  }

  async searchMovies(query: string): Promise<MovieSearchResponse> {
    const url = buildApiUrl(this.baseUrl, this.apiKey, { s: query });
    return this.makeRequest<MovieSearchResponse>(url);
  }

  async getMovieDetails(imdbId: string): Promise<MovieDetails> {
    const url = buildApiUrl(this.baseUrl, this.apiKey, { i: imdbId });
    return this.makeRequest<MovieDetails>(url);
  }
}

export const omdbService = new OMDbService();
export { OMDbService };
