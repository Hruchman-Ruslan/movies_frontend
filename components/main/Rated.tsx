import { useEffect, useState } from "react";

import { getTopRatedMovies } from "@/actions/action-movies";

import { cn } from "@/utils/cn";

import Left from "@/assets/icons/left.svg";
import Right from "@/assets/icons/right.svg";

import Title from "@/components/Title";
import MoviesList from "@/components/MoviesList";
import ChuckNorrisButton from "@/components/Button";

export interface TopRatingItem {
  id: number;
  poster: string;
  title: string;
}

export interface TopRatingProps {
  topRatingData: TopRatingItem[];
}

export default function Rated({ topRatingData }: TopRatingProps) {
  const [visibleIndex, setVisibleIndex] = useState(0);
  const [page, setPage] = useState(1);
  const [moviesList, setMoviesList] = useState<TopRatingItem[]>(topRatingData);

  useEffect(() => {
    if (page > 1) {
      getTopRatedMovies(page).then((newMovies) => {
        setMoviesList((prev) => [...prev, ...newMovies]);
      });
    }
  }, [page]);

  const handleNext = () => {
    const nextIndex = visibleIndex + 4;

    if (nextIndex >= moviesList.length) {
      setPage((prev) => prev + 1);
    }

    setVisibleIndex(nextIndex);
  };

  const handlePrev = () => {
    const prevIndex = visibleIndex - 4;
    if (prevIndex >= 0) {
      setVisibleIndex(prevIndex);
    }
  };

  return (
    <section>
      <div className={cn("mb-7 flex w-full items-center justify-between")}>
        <Title level="h2" className={cn("mb-0 font-title text-primary-text")}>
          Now Playing
        </Title>
        <div className={cn("center gap-5")}>
          <ChuckNorrisButton
            onClick={handlePrev}
            disabled={visibleIndex === 0}
            variant="svg"
          >
            <Left />
          </ChuckNorrisButton>
          <ChuckNorrisButton onClick={handleNext} variant="svg">
            <Right />
          </ChuckNorrisButton>
        </div>
      </div>

      <MoviesList
        movies={moviesList.slice(visibleIndex, visibleIndex + 4)}
        variant="topRated"
        onAdd={() => console.log("fatality adding")}
        onWatch={() => console.log("fatality watching")}
      />
    </section>
  );
}
