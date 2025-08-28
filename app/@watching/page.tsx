import { MovieProps } from "@/types/movie";

import king_man from "@/public/king_man.png";
import money from "@/public/money.png";
import navalny from "@/public/navalny.png";
import enternals from "@/public/enternals.png";

import Watching from "@/components/footer/Watching";

const watchListData: MovieProps[] = [
  {
    id: 1,
    poster: king_man,
    title: "The Kings Man",
    genres: "Adventure, Crime",
    rating: 4,
    variant: "watching",
  },
  {
    id: 2,
    poster: money,
    title: "Money Heist",
    genres: "Action, Sci-Fi",
    rating: 5,
    variant: "watching",
  },
  {
    id: 3,
    poster: navalny,
    title: "Navalny",
    genres: "Adventure, Drama",
    rating: 4,
    variant: "watching",
  },
  {
    id: 4,
    poster: enternals,
    title: "Enternals",
    genres: "Crime, War",
    rating: 3,
    variant: "watching",
  },
];

export default function WatchingPage() {
  const movies: MovieProps[] = watchListData;
  return (
    <div>
      <Watching movies={movies} />
    </div>
  );
}
