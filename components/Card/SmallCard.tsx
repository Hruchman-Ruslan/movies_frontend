import Link from "next/link";
import Image from "next/image";

import { PosterSize, MovieProps } from "@/types/movie";

import { getSizes } from "@/utils/getSizes";

import Rating from "@/components/Rating";

export default function SmallCard({
  poster,
  title,
  posterSize,
  genres,
  rating,
}: MovieProps & { posterSize: PosterSize }) {
  const posterUrl = poster || "/default.webp";

  return (
    <div className="flex">
      <Link href="#" className="mr-3.5">
        <div className="relative h-24 w-16 flex-shrink-0">
          <Image
            src={posterUrl}
            alt={title || "default image"}
            fill
            className="rounded object-cover"
            sizes={getSizes(posterSize)}
          />
        </div>
      </Link>
      <div className="flex flex-col justify-center">
        <p className="mb-0.5 font-primary text-secondary-text">{title}</p>
        <p className="mb-1 font-primary text-secondary-text">{genres}</p>
        {rating && <Rating value={rating} />}
      </div>
    </div>
  );
}
