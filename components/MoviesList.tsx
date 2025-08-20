import Link from "next/link";
import Image, { StaticImageData } from "next/image";

import { cn } from "@/utils/cn";

import Rating from "@/components/Rating";

interface Movie {
  title: string;
  genre: string;
  rating: number;
  src: StaticImageData;
}

interface MoviesListProps {
  moviesData: Movie[];
}

export default function MoviesList({ moviesData }: MoviesListProps) {
  return (
    <ul className={cn("mb-4 flex flex-col items-start gap-y-4")}>
      {moviesData.map(({ title, genre, rating, src }) => (
        <li key={title}>
          <div className={cn("flex items-start gap-x-4")}>
            <Link href="#" className={cn("flex-shrink-0")}>
              <Image
                src={src || "/default.webp"}
                alt={title || "default image"}
                width={64}
                height={90}
                className={cn("rounded")}
              />
            </Link>
            <div>
              <p className={cn("mb-0.5 text-base font-semibold text-white")}>
                {title}
              </p>
              <p className={cn("mb-2 text-sm text-stone-300")}>{genre}</p>
              <Rating value={rating} />
            </div>
          </div>
        </li>
      ))}
    </ul>
  );
}
