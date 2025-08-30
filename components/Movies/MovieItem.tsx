import { ImageSize, MovieProps } from "@/types/movie";

import SmallCard from "@/components/Card/SmallCard";
import LargeCard from "@/components/Card/LargeCard";

export default function MovieItem(
  props: MovieProps & { imageSize: ImageSize },
) {
  switch (props.variant) {
    case "popular":
    case "watching":
      return <SmallCard {...props} imageSize={props.imageSize} />;
    case "nowPlaying":
    case "topRated":
      return <LargeCard {...props} imageSize={props.imageSize} />;
    default:
      return null;
  }
}
