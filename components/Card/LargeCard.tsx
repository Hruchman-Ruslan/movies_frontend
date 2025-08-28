import Image from "next/image";

import { MovieProps } from "@/types/movie";

import ChuckNorrisButton from "@/components/Button";
import Title from "@/components/Title";

export default function LargeCard({
  poster,
  title,
  onAdd,
  onWatch,
  variant,
  ...movie
}: MovieProps) {
  return (
    <div className="relative aspect-[2/3] w-full">
      <Image
        src={poster || "/default.webp"}
        alt={title || "default image"}
        fill
        className="rounded object-cover"
        sizes="(max-width: 768px) 100vw, 20vw"
      />

      {(variant === "nowPlaying" || variant === "topRated") && (
        <>
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
        </>
      )}

      {variant === "topRated" && title && (
        <Title
          level="h3"
          className="--primary-text absolute top-1/2 left-1/2 w-full -translate-x-1/2 -translate-y-1/2 truncate px-2 text-center text-lg font-semibold"
        >
          {title}
        </Title>
      )}
    </div>
  );
}
