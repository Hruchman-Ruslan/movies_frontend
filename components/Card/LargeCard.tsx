import Image from "next/image";

import { PosterSize, MovieProps } from "@/types/movie";

import { getSizes } from "@/utils/getSizes";

import ChuckNorrisButton from "@/components/Button";

export default function LargeCard({
  poster,
  title,
  posterSize,
  onAdd,
  onWatch,
  variant,
  ...movie
}: MovieProps & { posterSize: PosterSize }) {
  const posterUrl = poster || "/default.webp";

  return (
    <div className="relative aspect-[2/3] w-full">
      <Image
        src={posterUrl}
        alt={title || "default image"}
        fill
        className="rounded object-cover"
        sizes={getSizes(posterSize)}
      />

      <ChuckNorrisButton
        variant="add"
        onClick={() => onAdd?.({ ...movie, poster, title, variant })}
        className="absolute top-2 right-2"
      >
        +
      </ChuckNorrisButton>
      <ChuckNorrisButton
        variant="watch now"
        onClick={() => onWatch?.({ ...movie, poster, title, variant })}
        className="absolute bottom-2 left-1/2 max-h-12 max-w-36 -translate-x-1/2"
      >
        Watch Now
      </ChuckNorrisButton>
    </div>
  );
}
