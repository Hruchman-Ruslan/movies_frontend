"use client";

import { getNowPlayingMovies } from "@/actions/action-movies";

import { MovieProps } from "@/types/movie";

import { useImageSize } from "@/hooks/useImageSize";
import { useMoviesPagination } from "@/hooks/useMoviesPagination";

import { cn } from "@/utils/cn";

import Left from "@/assets/icons/left.svg";
import Right from "@/assets/icons/right.svg";

import Title from "../Title";
import MoviesList from "@/components/Movies/MoviesList";
import ChuckNorrisButton from "@/components/Button";

export default function NowPlayingList({ movies }: { movies: MovieProps[] }) {
  const imageSize = useImageSize();
  const { paginatedMovies, handleNext, handlePrev, loading, visibleIndex } =
    useMoviesPagination(movies, 5, getNowPlayingMovies, imageSize);

  return (
    <section>
      <div className={cn("mb-7 flex w-full items-center justify-between")}>
        <Title level="h2" className={cn("mb-0 font-title text-primary-text")}>
          Now Playing
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
        variant="nowPlaying"
        onAdd={() => console.log("fatality adding")}
        onWatch={() => console.log("fatality watching")}
      />
    </section>
  );
}
