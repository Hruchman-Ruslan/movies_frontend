"use server";

export async function searchMovies(formData: FormData) {
  const query = formData.get("query");

  console.log("query server:", query);

  return { query };
}
