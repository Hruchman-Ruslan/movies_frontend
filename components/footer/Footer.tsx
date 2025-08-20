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
  // {
  // 	src: king_man,
  // 	title: 'The Kings Man',
  // 	genre: 'Adventure, Crime',
  // 	rating: 4,
  // },
  { src: money, title: "Money Heist", genre: "Action, Sci-Fi", rating: 5 },
  { src: navalny, title: "Navalny", genre: "Adventure, Drama", rating: 4 },
  { src: enternals, title: "Enternals", genre: "Crime, War", rating: 3 },
];

export default function Footer() {
  return (
    <footer className="flex h-screen w-full flex-col gap-4 bg-stone-900 pt-5">
      <div className="px-4">
        <Form />
        <div className="mb-6 flex items-center justify-between">
          <Title level={"h2"} className="mb-0">
            Popular Movies
          </Title>
          <Options className="cursor-pointer" />
        </div>
        <div className="max-h-60 w-full overflow-y-auto">
          <MoviesList moviesData={popularMoviesData} />
        </div>
        <Button>See More</Button>
        <div className="mb-6 flex items-center justify-between">
          <Title level={"h3"} className="mb-0">
            Watch Lists
          </Title>
          <Options className="cursor-pointer" />
        </div>
        <div className="max-h-80 w-full overflow-y-auto">
          <MoviesList moviesData={watchListData} />
        </div>
        <Button>See More</Button>
      </div>
    </footer>
  );
}
