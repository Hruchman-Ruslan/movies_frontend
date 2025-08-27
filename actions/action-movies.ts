"use server";

const BACKEND_URL = process.env.NEXT_PUBLIC_BACKEND_URL;

export async function searchMovies(formData: FormData) {
  const query = formData.get("query");

  console.log("query server:", query);

  return { query };
}

export async function getPopularMovies(page: number = 1) {
  const res = await fetch(`${BACKEND_URL}/movies/popular?page=${page}`);
  const movies = await res.json();
  return movies;
}

export async function getNowPlayingMovies(page: number = 1) {
  const res = await fetch(`${BACKEND_URL}/movies/now_playing?page=${page}`);
  const movies = await res.json();
  return movies;
}

export async function getTopRatedMovies(page: number = 1) {
  const res = await fetch(`${BACKEND_URL}/movies/top_rated?page=${page}`);
  const movies = await res.json();
  return movies;
}
