import { PosterSize, MovieProps, BackdropSize } from "@/types/movie";

import SmallCard from "@/components/Card/SmallCard";
import LargeCard from "@/components/Card/LargeCard";
import HeroCard from "@/components/Card/HeroCard";

export default function MovieItem(
  props: MovieProps & { posterSize?: PosterSize; backdropSize?: BackdropSize },
) {
  const posterSize = props.posterSize ?? "original";
  const backdropSize = props.backdropSize ?? "original";

  switch (props.variant) {
    case "popular":
    case "watching":
      return <SmallCard {...props} posterSize={posterSize} />;
    case "nowPlaying":
    case "topRated":
      return <LargeCard {...props} posterSize={posterSize} />;
    case "hero":
      return <HeroCard {...props} backdropSize={backdropSize} />;
    default:
      return null;
  }
}
