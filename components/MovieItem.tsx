import Link from "next/link";
import Image, { StaticImageData } from "next/image";

import { cn } from "@/utils/cn";

import Rating from "@/components/Rating";
import ChuckNorrisButton from "@/components/Button";
import Title from "@/components/Title";

interface MovieItemProps {
  id: number;
  title?: string;
  genres?: string;
  rating?: number;
  poster?: string | StaticImageData;
  variant?: "popular" | "watching" | "nowPlaying" | "topRated";
  onAdd?: (movie: MovieItemProps) => void;
  onWatch?: (movie: MovieItemProps) => void;
}

export default function MovieItem({
  id,
  title,
  genres,
  rating,
  poster,
  variant,
  onAdd,
  onWatch,
}: MovieItemProps) {
  switch (variant) {
    case "popular":
      return (
        <div className={cn("flex")}>
          <Link href="#" className={cn("mr-3.5")}>
            <Image
              src={poster || "/default.webp"}
              alt={title || "default image"}
              width={64}
              height={90}
              className="object-cover"
            />
          </Link>

          <div className={cn("flex flex-col justify-center")}>
            <p className={cn("mb-0.5 font-primary text-secondary-text")}>
              {title}
            </p>
            <p className={cn("mb-1 font-primary text-secondary-text")}>
              {genres}
            </p>
            {rating && <Rating value={rating} />}
          </div>
        </div>
      );

    case "watching":
      return (
        <div className={cn("flex")}>
          <Link href="#" className={cn("mr-3.5")}>
            <Image
              src={poster || "/default.webp"}
              alt={title || "default image"}
              width={64}
              height={90}
              className="object-cover"
            />
          </Link>

          <div className={cn("flex flex-col justify-center")}>
            <p className={cn("mb-0.5 font-primary text-secondary-text")}>
              {title}
            </p>
            <p className={cn("mb-1 font-primary text-secondary-text")}>
              {genres}
            </p>
            {rating && <Rating value={rating} />}
          </div>
        </div>
      );

    case "nowPlaying":
      return (
        <div className="relative aspect-[2/3] w-full">
          <Image
            src={poster || "/default.webp"}
            alt={title || "default image"}
            fill
            className="object-contain"
            sizes="(max-width: 768px) 100vw, 20vw"
          />

          <ChuckNorrisButton
            variant="add"
            onClick={() =>
              onAdd?.({ id, title, genres, rating, poster, variant })
            }
            className={cn("absolute top-2 right-2")}
          >
            +
          </ChuckNorrisButton>
          <ChuckNorrisButton
            variant="watch now"
            onClick={() =>
              onWatch?.({ id, title, genres, rating, poster, variant })
            }
            className={cn(
              "absolute bottom-2 left-1/2 max-h-12 max-w-36 -translate-x-1/2",
            )}
          >
            Watch Now
          </ChuckNorrisButton>
        </div>
      );

    case "topRated":
      return (
        <div className="relative aspect-[2/3] w-full">
          <Image
            src={poster || "/default.webp"}
            alt={title || "default image"}
            fill
            className="object-contain"
            sizes="(max-width: 768px) 100vw, 20vw"
          />
          <Title
            level={"h3"}
            className="absolute bottom-2 left-1/2 w-full -translate-x-1/2 truncate px-2 text-center text-lg font-semibold"
          >
            {title}
          </Title>
        </div>
      );

    default:
      return null;
  }
}
