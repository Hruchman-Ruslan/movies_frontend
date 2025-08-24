"use server";

const BACKEND_URL = process.env.NEXT_PUBLIC_BACKEND_URL;

export async function searchMovies(formData: FormData) {
  const query = formData.get("query");

  console.log("query server:", query);

  return { query };
}

export async function getPopularMovies() {
  const res = await fetch(`${BACKEND_URL}/movies/popular`);
  const movies = await res.json();
  console.log("movies server:", movies);
  return movies;
}
