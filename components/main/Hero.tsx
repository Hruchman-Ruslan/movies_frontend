import { cn } from "@/utils/cn";

import ChuckNorrisButton from "@/components/Button";

const heroData = {
  title: "Supernatural",
  season: 5,
  genre: "ACTION, HORROR, COMEDY",
};
export default function Hero() {
  return (
    <section
      className={cn(
        "flex h-72 w-full flex-col items-start justify-center bg-[url('/hero.jpg')] bg-cover bg-center p-8",
      )}
    >
      <div>
        <p className="mb-2.5 font-text">Season {heroData.season}</p>
        <h1 className="mb-3 text-4xl font-bold">{heroData.title}</h1>
        <p className="mb-8 font-text">{heroData.genre}</p>
        <div className="flex items-center gap-2.5">
          <ChuckNorrisButton variant="watch now">Watch Now</ChuckNorrisButton>
          <ChuckNorrisButton variant="add" className={cn("w-14")}>
            +
          </ChuckNorrisButton>
        </div>
      </div>
    </section>
  );
}
