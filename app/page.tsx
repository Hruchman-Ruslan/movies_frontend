import Hero from "@/components/main/Hero";
import MainHeader from "@/components/main/MainHeader";
import NowPlaying from "@/components/main/NowPlaying";
import NowPlayingList from "@/components/main/NowPlayingList";
import TopRating from "@/components/main/TopRating";
import TopRatingList from "@/components/main/TopRatingList";

import delth from "/public/delth.png";
import demon from "/public/demon.png";
import avatar from "/public/avatar.png";
import menu from "/public/menu.png";

import comedy from "/public/comedy.png";
import bad_little_lies from "/public/bad_little_lies.png";
import supernatural from "/public/supernatural.png";

const nowPlayingData = [
  { title: "Delth", image: delth },
  { title: "Demon", image: demon },
  { title: "Avatar", image: avatar },
  { title: "Menu", image: menu },
  { title: "Delth", image: delth },
];

const topRatingData = [
  { title: "Comedy (2023)", image: comedy },
  { title: "Bad Little Lies (2022)", image: bad_little_lies },
  { title: "Supernatural (2021)", image: supernatural },
  { title: "Comedy (2023)", image: comedy },
];

export default function Home() {
  return (
    <>
      <MainHeader />
      <Hero />
      <NowPlaying />
      <NowPlayingList nowPlayingData={nowPlayingData} />
      <TopRating />
      <TopRatingList topRatingData={topRatingData} />
    </>
  );
}
