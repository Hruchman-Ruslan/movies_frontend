"use client";

import { getTopRatedMovies } from "@/actions/action-movies";

import { MovieProps } from "@/types/movie";

import { useMoviesPagination } from "@/hooks/useMoviesPagination";

import { cn } from "@/utils/cn";

import Left from "@/assets/icons/left.svg";
import Right from "@/assets/icons/right.svg";

import Title from "@/components/Title";
import MoviesList from "@/components/Movies/MoviesList";
import ChuckNorrisButton from "@/components/Button";

export default function TopRatingList({ movies }: { movies: MovieProps[] }) {
  const { paginatedMovies, handleNext, handlePrev, loading, visibleIndex } =
    useMoviesPagination(movies, 4, getTopRatedMovies);

  return (
    <section>
      <div className={cn("mb-7 flex w-full items-center justify-between")}>
        <Title level="h2" className={cn("mb-0 font-title text-primary-text")}>
          Top Rated Movies
        </Title>
        <div className={cn("center gap-5")}>
          <ChuckNorrisButton
            onClick={handlePrev}
            disabled={loading || visibleIndex === 0}
            variant="svg"
          >
            <Left />
          </ChuckNorrisButton>
          <ChuckNorrisButton
            onClick={handleNext}
            disabled={loading}
            variant="svg"
          >
            <Right />
          </ChuckNorrisButton>
        </div>
      </div>

      <MoviesList
        movies={paginatedMovies}
        variant="topRated"
        onAdd={() => console.log("fatality adding")}
        onWatch={() => console.log("fatality watching")}
      />
    </section>
  );
}
