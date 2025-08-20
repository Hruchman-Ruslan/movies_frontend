"use client";

import { searchMovies } from "@/actions/action-search";

import Search from "@/assets/icons/search.svg";

export default function Form() {
  async function handleSubmit(formData: FormData) {
    const movies = await searchMovies(formData);
    console.log("movies client:", movies);
  }

  return (
    <form action={handleSubmit} className="relative mb-6 w-full">
      <label htmlFor="movie-search" className="sr-only">
        Search movies
      </label>

      <input
        id="movie-search"
        name="query"
        type="text"
        placeholder="Search movies..."
        className="h-12 w-full rounded-[20px] bg-stone-100 px-12 text-base font-medium text-black"
      />

      <button
        type="submit"
        className="absolute top-1/2 left-3 -translate-y-1/2 cursor-pointer"
      >
        <Search className="text-stone-500" />
      </button>
    </form>
  );
}
