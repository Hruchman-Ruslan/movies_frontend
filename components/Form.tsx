"use client";

import { searchMovies } from "@/actions/action-movies";

import { cn } from "@/utils/cn";

import Search from "@/assets/icons/search.svg";

export default function Form() {
  async function handleSubmit(formData: FormData) {
    const movies = await searchMovies(formData);
    console.log("movies client:", movies);
  }

  return (
    <form action={handleSubmit} className={cn("relative mb-3 w-full")}>
      <label htmlFor="movie-search" className="sr-only">
        Search movies
      </label>

      <input
        id="movie-search"
        name="query"
        type="text"
        placeholder="Search movies..."
        className={cn(
          "h-12 w-full rounded-[20px] px-12",
          "bg-stone-100 placeholder:text-stone-500",
          "text-black transition-colors duration-200 focus:ring-2 focus:ring-red-300 focus:outline-none",
        )}
      />

      <button
        type="submit"
        className={cn(
          "absolute top-1/2 left-3 -translate-y-1/2",
          "text-stone-500 transition-colors duration-200 hover:text-red-600",
        )}
      >
        <Search />
      </button>
    </form>
  );
}
