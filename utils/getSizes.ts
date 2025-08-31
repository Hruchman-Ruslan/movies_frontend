import { BackdropSize, PosterSize } from "@/types/movie";

export function getSizes(size: PosterSize | BackdropSize) {
  switch (size) {
    case "w92":
      return "92px";
    case "w154":
      return "154px";
    case "w185":
      return "185px";
    case "w342":
      return "342px";
    case "w500":
      return "500px";
    case "w780":
      return "780px";
    case "w300":
      return "300px";
    case "w1280":
      return "1280px";
    case "original":
      return "100vw";
    default:
      return "100vw";
  }
}
