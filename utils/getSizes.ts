import { ImageSize } from "@/types/movie";

export function getSizes(imageSize: ImageSize) {
  switch (imageSize) {
    case "w185":
      return "(max-width: 640px) 100vw, 50vw";
    case "w342":
      return "(max-width: 1024px) 50vw, 33vw";
    case "w500":
      return "(max-width: 1440px) 33vw, 25vw";
    case "w780":
      return "25vw";
    default:
      return "100vw";
  }
}
