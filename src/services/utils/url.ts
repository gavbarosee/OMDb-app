export function createBaseUrl(baseUrl: string, apiKey: string): URL {
  const url = new URL(baseUrl);
  url.searchParams.append("apikey", apiKey);
  return url;
}

export function addQueryParams(
  url: URL,
  params: Record<string, string | undefined>
): void {
  Object.entries(params).forEach(([key, value]) => {
    if (value !== undefined) {
      url.searchParams.append(key, value);
    }
  });
}

export function buildApiUrl(
  baseUrl: string,
  apiKey: string,
  params: Record<string, string | undefined>
): string {
  const url = createBaseUrl(baseUrl, apiKey);
  addQueryParams(url, params);
  return url.toString();
}
