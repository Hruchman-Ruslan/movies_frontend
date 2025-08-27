import { cn } from "@/utils/cn";

import { StaticImageData } from "next/image";

import MovieItem from "@/components/MovieItem";

export interface Movie {
  id: number;
  title?: string;
  genres?: string;
  rating?: number;
  poster?: string | StaticImageData;
}

interface MovieListProps {
  movies: Movie[];
  variant?: "popular" | "watching" | "nowPlaying" | "topRated";
  onAdd?: (movie: Movie) => void;
  onWatch?: (movie: Movie) => void;
  className?: string;
}

export default function MoviesList({
  movies,
  variant,
  onAdd,
  onWatch,
  className,
}: MovieListProps) {
  return (
    <>
      <ul
        className={cn(
          variant === "popular" &&
            "mb-4 flex flex-col items-center justify-center gap-y-3.5",
          variant === "watching" &&
            "mb-4 flex flex-col items-center justify-center gap-y-3.5",
          variant === "nowPlaying" && "grid w-full grid-cols-5 gap-3.5",
          variant === "topRated" && "grid w-full grid-cols-4 gap-3.5",
          className,
        )}
      >
        {movies.map((movie) => (
          <li key={movie.id} className={cn("w-full")}>
            <MovieItem
              {...movie}
              variant={variant}
              onAdd={onAdd}
              onWatch={onWatch}
            />
          </li>
        ))}
      </ul>
    </>
  );
}
