import Link from "next/link";
import Image from "next/image";

import { cn } from "@/utils/cn";

import Rating from "@/components/Rating";

export interface Movie {
  title: string;
  genres: string;
  rating: number;
  poster: string;
}

interface MoviesListProps {
  moviesData: Movie[];
}

export default function MoviesList({ moviesData }: MoviesListProps) {
  return (
    <ul className={cn("mb-4 flex flex-col gap-y-4")}>
      {moviesData.map(({ title, genres, rating, poster }) => (
        <li key={title}>
          <div className={cn("flex items-start gap-x-4")}>
            <Link href="#">
              <Image
                src={poster || "/default.webp"}
                alt={title || "default image"}
                width={64}
                height={90}
                className={cn("rounded")}
              />
            </Link>
            <div>
              <p className={cn("mb-0.5 font-primary text-secondary-text")}>
                {title}
              </p>
              <p className={cn("mb-2 font-primary text-secondary-text")}>
                {genres}
              </p>
              <Rating value={rating} />
            </div>
          </div>
        </li>
      ))}
    </ul>
  );
}
