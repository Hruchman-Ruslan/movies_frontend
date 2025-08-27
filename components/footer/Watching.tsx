import { cn } from "@/utils/cn";

import Options from "@/assets/icons/options.svg";

import Title from "@/components/Title";

import MoviesList, { Movie } from "@/components/MoviesList";
import ChuckNorrisButton from "@/components/Button";

interface WatchingProps {
  movies: Movie[];
}

export default function Watching({ movies }: WatchingProps) {
  return (
    <>
      <div className={cn("center-between mb-5")}>
        <Title level="h3" className={cn("font-title text-primary-text")}>
          Watch Lists
        </Title>
        <Options />
      </div>

      <MoviesList movies={movies} variant="watching" />
      <ChuckNorrisButton variant={"showMore"}>Show More</ChuckNorrisButton>
    </>
  );
}
