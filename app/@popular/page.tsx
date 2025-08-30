import { getPopularMovies } from "@/actions/action-movies";

import Popular from "@/components/footer/Popular";

export default async function PopularPage() {
  const movies = await getPopularMovies(1, "w185");

  return (
    <div>
      <Popular movies={movies} />
    </div>
  );
}
