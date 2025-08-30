import { StaticImageData } from "next/image";

export type MovieVariant = "popular" | "watching" | "nowPlaying" | "topRated";

export type ImageSize =
  | "w92"
  | "w154"
  | "w185"
  | "w342"
  | "w500"
  | "w780"
  | "original";

export interface MovieBase {
  id: number;
  title?: string;
  genres?: string;
  rating?: number;
  poster?: ImageSize | StaticImageData;
  backdrop?: string;
  overview?: string;
  releaseDate?: string;
}

export interface MovieProps extends MovieBase {
  variant: MovieVariant;
  onAdd?: (movie: MovieProps) => void;
  onWatch?: (movie: MovieProps) => void;
}
