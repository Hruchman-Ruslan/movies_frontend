import { StaticImageData } from "next/image";

export type MovieVariant = "popular" | "watching" | "nowPlaying" | "topRated";

export interface MovieBase {
  id: number;
  title?: string;
  genres?: string;
  rating?: number;
  poster?: string | StaticImageData;
  backdrop?: string;
  overview?: string;
  releaseDate?: string;
}

export interface MovieProps extends MovieBase {
  variant: MovieVariant;
  onAdd?: (movie: MovieProps) => void;
  onWatch?: (movie: MovieProps) => void;
}
