# OMDb App

## Getting Started

Ensure you have Node 18+ installed, have cloned the repo locally and changed into it from your terminal.

Create a `.env` file in the root of the project with the following pasted in:

```bash
VITE_OMDB_API_KEY=your-omdb-api-key
VITE_OMDB_BASE_URL=https://www.omdbapi.com/
```

Then run the following:

```bash
npm install
npm run dev
```

## Assumptions

- No pagination is required since most searches do not send large enough data to be paginated
- As a tangent to the above point, no list virtualisation for the movie cards would be needed as there wouldn't be any huge lists
- No in-depth accessibility requirements other than basic semantic html, ARIA attributes
- Requests can be cached as needed with an appropriate stale time
- Cards do not show the rating (since the Search API endpoint does not return that property)
- Movie detail views are deep-linked, can be copied-pasted anywhere and have the content show up
- Going back to the search page from the movie detail view shows the previously fetched results
- Some images URls are broken by default from the API, so a logic on the FE to show No Image Available should be fine
