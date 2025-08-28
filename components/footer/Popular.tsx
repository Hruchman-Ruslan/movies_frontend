"use client";

import { useState, useEffect } from "react";

import { getPopularMovies } from "@/actions/action-movies";

import { MovieProps } from "@/types/movie";

import { cn } from "@/utils/cn";

import Options from "@/assets/icons/options.svg";

import Title from "@/components/Title";
import MoviesList from "@/components/Movies/MoviesList";
import ChuckNorrisButton from "@/components/Button";

interface PopularProps {
  movies: MovieProps[];
}

export default function Popular({ movies }: PopularProps) {
  const [moviesList, setMoviesList] = useState<MovieProps[]>(movies);
  const [page, setPage] = useState(1);
  const [visibleIndex, setVisibleIndex] = useState(0);

  useEffect(() => {
    getPopularMovies(page).then((newMovies) => {
      setMoviesList((prev) => [...prev, ...newMovies]);
    });
  }, [page]);

  const handleNext = () => {
    const nextIndex = visibleIndex + 2;
    if (nextIndex >= movies.length) setPage((prev) => prev + 1);
    setVisibleIndex(nextIndex);
  };

  return (
    <>
      <div className={cn("center-between mb-5")}>
        <Title level="h2" className={cn("font-title text-primary-text")}>
          Popular Movies
        </Title>
        <Options />
      </div>
      <MoviesList
        movies={moviesList.slice(visibleIndex, visibleIndex + 2)}
        variant="popular"
      />

      <ChuckNorrisButton onClick={handleNext} variant="showMore">
        Show More
      </ChuckNorrisButton>
    </>
  );
}
