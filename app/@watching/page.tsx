import { cn } from "@/utils/cn";

import Options from "@/assets/icons/options.svg";

import Title from "@/components/Title";
import Button from "@/components/Button";
import MoviesList from "@/components/MoviesList";

import king_man from "@/public/king_man.png";
import money from "@/public/money.png";
import navalny from "@/public/navalny.png";
import enternals from "@/public/enternals.png";

const watchListData = [
  {
    poster: king_man,
    title: "The Kings Man",
    genres: "Adventure, Crime",
    rating: 4,
  },
  { poster: money, title: "Money Heist", genres: "Action, Sci-Fi", rating: 5 },
  { poster: navalny, title: "Navalny", genres: "Adventure, Drama", rating: 4 },
  // { poster: enternals, title: "Enternals", genres: "Crime, War", rating: 3 },
];

export default function Watching() {
  return (
    <div className={cn("px-4")}>
      <div className={cn("center-between mb-5")}>
        <Title level="h3" className={cn("mb-0 font-title text-primary-text")}>
          Watch Lists
        </Title>
        <Options />
      </div>

      <div className={cn("w-full")}>
        <MoviesList moviesData={watchListData} />
        <Button>See More</Button>
      </div>
    </div>
  );
}
