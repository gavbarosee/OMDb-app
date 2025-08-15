export function validateHttpResponse(response: Response): void {
  if (!response.ok) {
    throw new Error(`HTTP error! status: ${response.status}`);
  }
}

export function validateOMDbResponse(data: {
  Response?: string;
  Error?: string;
}): void {
  if (data.Response === "False") {
    throw new Error(data.Error || "Unknown API error");
  }
}

export function wrapUnknownError(error: unknown): never {
  throw error instanceof Error ? error : new Error("Unknown error occurred");
}
