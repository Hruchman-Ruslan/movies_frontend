"use client";

import { cn } from "@/utils/cn";

import { getUpcoming } from "@/actions/action-movies";

import { MovieProps } from "@/types/movie";

import { useImageSize } from "@/hooks/useImageSize";
import { useMoviesPagination } from "@/hooks/useMoviesPagination";

import Left from "@/assets/icons/left.svg";
import Right from "@/assets/icons/right.svg";

import MoviesList from "../Movies/MoviesList";
import ChuckNorrisButton from "@/components/Button";

export default function Hero({ movies }: { movies: MovieProps[] }) {
  const { backdropSize } = useImageSize();
  const { paginatedMovies, handleNext, handlePrev, loading, visibleIndex } =
    useMoviesPagination({
      movies,
      perPage: 1,
      fetcher: getUpcoming,
      backdropSize,
    });
  return (
    <section className={cn("flex gap-10 px-14")}>
      <ChuckNorrisButton
        onClick={handlePrev}
        disabled={loading || visibleIndex === 0}
        variant="svg"
      >
        <Left />
      </ChuckNorrisButton>

      <MoviesList
        backdropSize={backdropSize}
        movies={paginatedMovies}
        variant="hero"
        onAdd={() => console.log("fatality adding")}
        onWatch={() => console.log("fatality watching")}
      />

      <ChuckNorrisButton onClick={handleNext} disabled={loading} variant="svg">
        <Right />
      </ChuckNorrisButton>
    </section>
  );
}
