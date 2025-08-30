import Link from "next/link";
import Image from "next/image";

import { MovieProps } from "@/types/movie";

// import { getSizes } from "@/utils/getSizes";
// import { useImageSize } from "@/hooks/useImageSize";

import Rating from "@/components/Rating";

export default function SmallCard({
  poster,
  title,
  genres,
  rating,
}: MovieProps) {
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
            // sizes={getSizes(imageSize)}
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
