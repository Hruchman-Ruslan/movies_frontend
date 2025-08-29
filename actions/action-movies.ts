"use server";

const BACKEND_URL = process.env.NEXT_PUBLIC_BACKEND_URL;

async function fetchMovies(
  type: "popular" | "now_playing" | "top_rated" | "upcoming",
  page: number = 1,
) {
  const res = await fetch(`${BACKEND_URL}/movies/${type}?page=${page}`);
  if (!res.ok) throw new Error(`Failed to fetch ${type} movies`);
  const data = await res.json();
  return data.results || [];
}

export async function searchMovies(formData: FormData) {
  const query = formData.get("query");
  return { query };
}

export const getPopularMovies = async (page?: number) =>
  fetchMovies("popular", page);
export const getNowPlayingMovies = async (page?: number) =>
  fetchMovies("now_playing", page);
export const getTopRatedMovies = async (page?: number) =>
  fetchMovies("top_rated", page);
export const getUpcoming = async (page?: number) =>
  fetchMovies("upcoming", page);
