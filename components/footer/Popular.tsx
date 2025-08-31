"use client";

import { getPopularMovies } from "@/actions/action-movies";

import { MovieProps } from "@/types/movie";

import { useImageSize } from "@/hooks/useImageSize";
import { useMoviesPagination } from "@/hooks/useMoviesPagination";

import { cn } from "@/utils/cn";

import Options from "@/assets/icons/options.svg";

import Title from "@/components/Title";
import MoviesList from "@/components/Movies/MoviesList";
import ChuckNorrisButton from "@/components/Button";

export default function Popular({ movies }: { movies: MovieProps[] }) {
  const { posterSize } = useImageSize();
  const { paginatedMovies, handleNext, loading } = useMoviesPagination({
    movies,
    perPage: 2,
    fetcher: getPopularMovies,
    posterSize,
  });

  return (
    <>
      <div className={cn("center-between mb-5")}>
        <Title level="h2" className={cn("font-title text-primary-text")}>
          Popular Movies
        </Title>
        <Options />
      </div>
      <MoviesList
        movies={paginatedMovies}
        variant="popular"
        posterSize={posterSize}
      />

      <ChuckNorrisButton
        onClick={handleNext}
        disabled={loading}
        variant="showMore"
      >
        Show More
      </ChuckNorrisButton>
    </>
  );
}
