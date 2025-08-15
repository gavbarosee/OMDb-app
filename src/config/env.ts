interface EnvConfig {
  omdbApiKey: string;
  omdbBaseUrl: string;
  isDevelopment: boolean;
  isProduction: boolean;
}

function getEnvVar(key: string): string {
  const value = import.meta.env[key];

  if (!value) {
    throw new Error(`Missing required environment variable: ${key}`);
  }

  return value;
}

export const env: EnvConfig = {
  omdbApiKey: getEnvVar("VITE_OMDB_API_KEY"),
  omdbBaseUrl: getEnvVar("VITE_OMDB_BASE_URL"),
  isDevelopment: import.meta.env.DEV,
  isProduction: import.meta.env.PROD,
};
