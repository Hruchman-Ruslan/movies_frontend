import { useState, useEffect } from "react";

import { PosterSize, MovieProps, BackdropSize } from "@/types/movie";

export function useMoviesPagination({
  movies,
  perPage,
  fetcher,
  posterSize,
  backdropSize,
}: {
  movies: MovieProps[];
  perPage: number;
  fetcher: (
    page: number,
    posterSize?: PosterSize,
    backdropSize?: BackdropSize,
  ) => Promise<MovieProps[]>;
  posterSize?: PosterSize;
  backdropSize?: BackdropSize;
}) {
  const [moviesList, setMoviesList] = useState<MovieProps[]>(movies);
  const [visibleIndex, setVisibleIndex] = useState(0);
  const [page, setPage] = useState(1);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    if (page > 1) {
      const fetchMovies = async () => {
        setLoading(true);
        try {
          const newMovies = await fetcher(page, posterSize, backdropSize);
          setMoviesList((prev) => [...prev, ...newMovies]);
        } catch (error) {
          console.error("Failed to load movies:", error);
        } finally {
          setLoading(false);
        }
      };

      fetchMovies();
    }
  }, [page, fetcher, posterSize, backdropSize]);

  const handleNext = () => {
    if (loading) return;

    const nextIndex = visibleIndex + perPage;
    if (nextIndex >= moviesList.length) setPage((prev) => prev + 1);
    setVisibleIndex(nextIndex);
  };

  const handlePrev = () => {
    const prevIndex = visibleIndex - perPage;
    if (prevIndex >= 0) setVisibleIndex(prevIndex);
  };

  const paginatedMovies = moviesList.slice(
    visibleIndex,
    visibleIndex + perPage,
  );

  return {
    paginatedMovies,
    handleNext,
    handlePrev,
    loading,
    visibleIndex,
  };
}
