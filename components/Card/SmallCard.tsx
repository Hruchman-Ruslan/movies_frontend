import Link from "next/link";
import Image from "next/image";

import { MovieProps } from "@/types/movie";

import Rating from "@/components/Rating";

export default function SmallCard({
  poster,
  title,
  genres,
  rating,
}: MovieProps) {
  return (
    <div className="flex">
      <Link href="#" className="mr-3.5">
        <div className="relative h-24 w-16 flex-shrink-0">
          <Image
            src={poster || "/default.webp"}
            alt={title || "default image"}
            fill
            className="rounded object-cover"
            sizes="64px"
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
