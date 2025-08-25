import { getPopularMovies } from "@/actions/action-movies";

import { cn } from "@/utils/cn";

import Options from "@/assets/icons/options.svg";

import Popular from "@/components/footer/Popular";
import Title from "@/components/Title";

export interface Movie {
  title: string;
  genres: string;
  rating: number;
  poster: string;
}

export default async function PopularPage() {
  const movies: Movie[] = await getPopularMovies(1);

  return (
    <div className={cn("min-h-[180px] px-4 pt-3.5")}>
      <div className={cn("center-between mb-5")}>
        <Title level="h2" className={cn("mb-0 font-title text-primary-text")}>
          Popular Movies
        </Title>
        <Options />
      </div>
      <Popular movies={movies} />
    </div>
  );
}
