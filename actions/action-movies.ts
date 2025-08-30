"use server";

import { ImageSize } from "@/types/movie";

const BACKEND_URL = process.env.NEXT_PUBLIC_BACKEND_URL;

async function fetchMovies(
  type: "popular" | "now_playing" | "top_rated" | "upcoming",
  page: number = 1,
  imageSize: ImageSize = "w500",
) {
  const res = await fetch(
    `${BACKEND_URL}/movies/${type}?page=${page}&imageSize=${imageSize}`,
  );
  if (!res.ok) throw new Error(`Failed to fetch ${type} movies`);
  const data = await res.json();
  return data.results || [];
}

export async function searchMovies(formData: FormData) {
  const query = formData.get("query");
  return { query };
}

export const getPopularMovies = async (page?: number, imageSize?: ImageSize) =>
  fetchMovies("popular", page, imageSize);
export const getNowPlayingMovies = async (
  page?: number,
  imageSize?: ImageSize,
) => fetchMovies("now_playing", page, imageSize);
export const getTopRatedMovies = async (page?: number, imageSize?: ImageSize) =>
  fetchMovies("top_rated", page, imageSize);
export const getUpcoming = async (page?: number, imageSize?: ImageSize) =>
  fetchMovies("upcoming", page, imageSize);
