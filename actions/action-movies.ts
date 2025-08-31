"use server";

import { BackdropSize, PosterSize } from "@/types/movie";

const BACKEND_URL = process.env.NEXT_PUBLIC_BACKEND_URL;

type MovieType = "popular" | "now_playing" | "top_rated" | "upcoming";

async function fetchMovies(
  type: MovieType,
  page: number = 1,
  posterSize: PosterSize = "original",
) {
  const res = await fetch(
    `${BACKEND_URL}/movies/${type}?page=${page}&posterSize=${posterSize}`,
  );
  if (!res.ok) throw new Error(`Failed to fetch ${type} movies`);
  const data = await res.json();
  return data.results || [];
}

async function fetchMoviesBackdrop(
  type: MovieType,
  page: number = 1,
  backdropSize: BackdropSize = "original",
) {
  const res = await fetch(
    `${BACKEND_URL}/movies/${type}?page=${page}&backdropSize=${backdropSize}`,
  );
  if (!res.ok) throw new Error(`Failed to fetch ${type} movies`);
  const data = await res.json();
  return data.results || [];
}

export async function searchMovies(formData: FormData) {
  const query = formData.get("query");
  return { query };
}

export const getPopularMovies = async (
  page?: number,
  posterSize?: PosterSize,
) => fetchMovies("popular", page, posterSize);
export const getNowPlayingMovies = async (
  page?: number,
  posterSize?: PosterSize,
) => fetchMovies("now_playing", page, posterSize);
export const getTopRatedMovies = async (
  page?: number,
  posterSize?: PosterSize,
) => fetchMovies("top_rated", page, posterSize);
export const getUpcoming = async (
  page?: number,
  posterSize?: PosterSize,
  backdropSize?: BackdropSize,
) => fetchMoviesBackdrop("upcoming", page, backdropSize);
