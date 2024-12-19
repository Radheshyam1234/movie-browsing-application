export const fetchMovies = async (page, filters, searchQuery = "") => {
  const { genre, minYear, maxYear, minRating, maxRating } = filters;

  const genreQuery = filters.genre ? `&with_genres=${filters.genre}` : "";
  const yearQuery = `&primary_release_date.gte=${filters?.minYear}-01-01&primary_release_date.lte=${filters?.maxYear}-12-31`;
  const ratingQuery = `&vote_average.gte=${filters?.minRating}&vote_average.lte=${filters?.maxRating}`;

  const options = {
    method: "GET",
    headers: {
      accept: "application/json",
      Authorization:
        "Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJlMTc4Y2JmMGQzOWU5MzNiMWJiNGEzYWQzZjU0NGY3ZiIsIm5iZiI6MTczNDUzNjY0MC4zMTIsInN1YiI6IjY3NjJlZGMwNTVjZDJkZWM5OGZmZTlhNyIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.t7F0cHnXoEsOpGDm7d8Am3S8aWpbqvUewmb0jqgQXxE",
    },
  };

  try {
    const base_url = searchQuery
      ? `https://api.themoviedb.org/3/search/movie`
      : `https://api.themoviedb.org/3/discover/movie`;

    const res = await fetch(
      `${base_url}?include_adult=false&include_video=false&language=en-US&sort_by=popularity.desc&query=${searchQuery}${genreQuery}${yearQuery}${ratingQuery}&page=${page}`,
      options
    );
    return res.json();
  } catch (error) {
    console.log(error);
  }
};
