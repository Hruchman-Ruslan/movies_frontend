import { MovieProps } from "@/types/movie";

import SmallCard from "@/components/Card/SmallCard";
import LargeCard from "@/components/Card/LargeCard";

export default function MovieItem(props: MovieProps) {
  switch (props.variant) {
    case "popular":
    case "watching":
      return <SmallCard {...props} />;
    case "nowPlaying":
    case "topRated":
      return <LargeCard {...props} />;
    default:
      return null;
  }
}
