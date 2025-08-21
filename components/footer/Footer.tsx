import Options from "@/assets/icons/options.svg";

import Form from "@/components/Form";
import Title from "@/components/Title";
import Button from "@/components/Button";
import MoviesList from "@/components/MoviesList";

import king_man from "@/public/king_man.png";
import resident from "@/public/resident.png";
import money from "@/public/money.png";
import navalny from "@/public/navalny.png";
import enternals from "@/public/enternals.png";

import { cn } from "@/utils/cn";

const popularMoviesData = [
  {
    src: king_man,
    title: "The Kings Man",
    genre: "Action, Adventure",
    rating: 4,
  },
  {
    src: resident,
    title: "Resident Alien",
    genre: "Action, Science",
    rating: 3,
  },
];

const watchListData = [
  {
    src: king_man,
    title: "The Kings Man",
    genre: "Adventure, Crime",
    rating: 4,
  },
  { src: money, title: "Money Heist", genre: "Action, Sci-Fi", rating: 5 },
  { src: navalny, title: "Navalny", genre: "Adventure, Drama", rating: 4 },
  { src: enternals, title: "Enternals", genre: "Crime, War", rating: 3 },
];

export default function Footer() {
  return (
    <footer
      className={cn(
        "flex w-full flex-col gap-4 pt-3.5",
        "h-screen bg-stone-900 text-white",
      )}
    >
      <div className={cn("px-4")}>
        <Form />

        <div className={cn("mb-5 flex items-center justify-between")}>
          <Title level="h2" className="mb-0">
            Popular Movies
          </Title>
          <Options className="cursor-pointer" />
        </div>
        <div className={cn("max-h-60 w-full")}>
          <MoviesList moviesData={popularMoviesData} />
        </div>
        <Button>See More</Button>

        <div className={cn("mb-5 flex items-center justify-between")}>
          <Title level="h3" className="mb-0">
            Watch Lists
          </Title>
          <Options className="cursor-pointer" />
        </div>
        <div className={cn("max-80 w-full")}>
          <MoviesList moviesData={watchListData} />
        </div>
        <Button>See More</Button>
      </div>
    </footer>
  );
}
