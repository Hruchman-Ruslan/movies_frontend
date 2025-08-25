"use client";

import Image from "next/image";
import Link from "next/link";

import { useState, useEffect } from "react";

import { getPopularMovies } from "@/actions/action-movies";

import { cn } from "@/utils/cn";

import { Movie } from "@/app/@popular/page";

import Rating from "@/components/Rating";
import Button from "@/components/Button";

interface PopularProps {
  movies: Movie[];
}

export default function Popular({ movies }: PopularProps) {
  const [moviesList, setMoviesList] = useState<Movie[]>(movies);
  const [page, setPage] = useState(1);
  const [visibleIndex, setVisibleIndex] = useState(0);

  useEffect(() => {
    getPopularMovies(page).then((newMovies) => {
      setMoviesList((prev) => [...prev, ...newMovies]);
    });
  }, [page]);

  const handleNext = () => {
    const nextIndex = visibleIndex + 2;
    if (nextIndex >= movies.length) setPage((prev) => prev + 1);
    setVisibleIndex(nextIndex);
  };

  return (
    <div className={cn("mb-4 flex flex-col gap-4")}>
      {moviesList
        .slice(visibleIndex, visibleIndex + 2)
        .map(({ title, poster, genres, rating }) => (
          <div key={title} className={cn("flex h-28 items-center gap-2")}>
            <Link
              href="#"
              className={cn(
                "relative block h-[90px] w-[64px] overflow-hidden rounded",
              )}
            >
              <Image
                src={poster || "/default.webp"}
                alt={title || "default image"}
                fill
                className="object-cover"
              />
            </Link>
            <div>
              <p className={cn("mb-0.5 font-primary text-secondary-text")}>
                {title}
              </p>
              <p className={cn("mb-1 font-primary text-secondary-text")}>
                {genres}
              </p>
              <Rating value={rating} />
            </div>
          </div>
        ))}

      <Button onClick={handleNext} bgColor="bg-red-100" textColor="text-black">
        Show More
      </Button>
    </div>
  );
}
