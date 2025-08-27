import { getPopularMovies } from "@/actions/action-movies";

import Popular from "@/components/footer/Popular";

export interface Movie {
  id: number;
  title: string;
  genres: string;
  rating: number;
  poster: string;
}

export default async function PopularPage() {
  const movies: Movie[] = await getPopularMovies(1);

  return (
    <div>
      <Popular movies={movies} />
    </div>
  );
}
