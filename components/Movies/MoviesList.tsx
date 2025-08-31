import { cn } from "@/utils/cn";
import { MovieProps, PosterSize, BackdropSize } from "@/types/movie";
import MovieItem from "@/components/Movies/MovieItem";

interface MoviesListProps {
  movies: MovieProps[];
  variant: MovieProps["variant"];
  posterSize?: PosterSize;
  backdropSize?: BackdropSize;
  onAdd?: (movie: MovieProps) => void;
  onWatch?: (movie: MovieProps) => void;
  className?: string;
}

const variantClasses: Record<MovieProps["variant"], string> = {
  popular: "mb-4 flex flex-col items-center justify-center gap-y-3.5",
  watching: "mb-4 flex flex-col items-center justify-center gap-y-3.5",
  nowPlaying: "grid w-full grid-cols-5 gap-3.5",
  topRated: "grid w-full grid-cols-4 gap-3.5",
  hero: "flex w-full items-center justify-center gap-y-3.5",
};

export default function MoviesList({
  movies,
  variant,
  posterSize,
  backdropSize,
  onAdd,
  onWatch,
  className,
}: MoviesListProps) {
  return (
    <ul className={cn(variantClasses[variant], className)}>
      {movies.map((movie) => (
        <li key={movie.id} className="w-full">
          <MovieItem
            {...movie}
            variant={variant}
            posterSize={posterSize}
            backdropSize={backdropSize}
            onAdd={onAdd}
            onWatch={onWatch}
          />
        </li>
      ))}
    </ul>
  );
}
