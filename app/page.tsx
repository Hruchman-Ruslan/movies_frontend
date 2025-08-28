import {
  getNowPlayingMovies,
  getTopRatedMovies,
} from "@/actions/action-movies";

import Hero from "@/components/main/Hero";
import NowPlayingList from "@/components/main/NowPlayingList";
import TopRatingList from "@/components/main/TopRatingList";

export default async function Home() {
  const nowPlayingMovies = await getNowPlayingMovies(1);
  const topRatingMovies = await getTopRatedMovies(1);

  return (
    <>
      <Hero />
      <NowPlayingList movies={nowPlayingMovies} />
      <TopRatingList movies={topRatingMovies} />
    </>
  );
}
