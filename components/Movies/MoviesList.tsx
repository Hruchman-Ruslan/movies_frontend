import { cn } from "@/utils/cn";

import { MovieProps } from "@/types/movie";

import MovieItem from "@/components/Movies/MovieItem";

interface MovieListProps {
  movies: MovieProps[];
  variant: MovieProps["variant"];
  onAdd?: (movie: MovieProps) => void;
  onWatch?: (movie: MovieProps) => void;
  className?: string;
}

const variantClasses: Record<MovieProps["variant"], string> = {
  popular: "mb-4 flex flex-col items-center justify-center gap-y-3.5",
  watching: "mb-4 flex flex-col items-center justify-center gap-y-3.5",
  nowPlaying: "grid w-full grid-cols-5 gap-3.5",
  topRated: "grid w-full grid-cols-4 gap-3.5",
};

export default function MoviesList({
  movies,
  variant,
  onAdd,
  onWatch,
  className,
}: MovieListProps) {
  return (
    <ul className={cn(variant && variantClasses[variant], className)}>
      {movies.map((movie) => (
        <li key={movie.id} className="w-full">
          <MovieItem
            {...movie}
            variant={variant}
            onAdd={onAdd}
            onWatch={onWatch}
          />
        </li>
      ))}
    </ul>
  );
}
