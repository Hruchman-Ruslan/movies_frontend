import { cn } from "@/utils/cn";

import Options from "@/assets/icons/options.svg";

import Form from "@/components/Form";
import Title from "@/components/Title";
import Button from "@/components/Button";
import MoviesList from "@/components/MoviesList";

import king_man from "@/public/king_man.png";
import resident from "@/public/resident.png";

const popularMoviesData = [
  {
    poster: king_man,
    title: "The Kings Man",
    genres: "Action, Adventure",
    rating: 4,
  },
  {
    poster: resident,
    title: "Resident Alien",
    genres: "Action, Science",
    rating: 3,
  },
];

export default function Popular() {
  return (
    <div className={cn("px-4 pt-3.5")}>
      <Form />

      <div className={cn("center-between mb-5")}>
        <Title level="h2" className={cn("mb-0 font-title text-primary-text")}>
          Popular Movies
        </Title>
        <Options />
      </div>

      <div className={cn("w-full")}>
        <MoviesList moviesData={popularMoviesData} />
      </div>

      <Button>See More</Button>
    </div>
  );
}
