import { cn } from "@/utils/cn";

import { MovieProps } from "@/types/movie";

import Options from "@/assets/icons/options.svg";

import Title from "@/components/Title";
import MoviesList from "@/components/Movies/MoviesList";
import ChuckNorrisButton from "@/components/Button";

export default function Watching({ movies }: { movies: MovieProps[] }) {
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
