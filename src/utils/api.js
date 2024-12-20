const options = {
  method: "GET",
  headers: {
    accept: "application/json",
    Authorization:
      "Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJlMTc4Y2JmMGQzOWU5MzNiMWJiNGEzYWQzZjU0NGY3ZiIsIm5iZiI6MTczNDUzNjY0MC4zMTIsInN1YiI6IjY3NjJlZGMwNTVjZDJkZWM5OGZmZTlhNyIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.t7F0cHnXoEsOpGDm7d8Am3S8aWpbqvUewmb0jqgQXxE",
  },
};

export const fetchMovies = async (page, filters, searchQuery = "") => {
  const { genre, minYear, maxYear, minRating, maxRating } = filters;

  const genreQuery = genre ? `&with_genres=${genre}` : "";
  const yearQuery =
    (minYear ? `&primary_release_date.gte=${minYear}-01-01` : "") +
    (maxYear ? `&primary_release_date.lte=${maxYear}-12-31` : "");
  const ratingQuery =
    (minRating ? `&vote_average.gte=${minRating}` : "") +
    (maxRating ? `&vote_average.lte=${maxRating}` : "");

  try {
    let baseUrl;
    let response;

    if (searchQuery) {
      baseUrl = `https://api.themoviedb.org/3/search/movie`;
      response = await fetch(
        `${baseUrl}?query=${searchQuery}&include_adult=false&include_video=false&language=en-US&sort_by=popularity.desc&page=${page}`,
        options
      );
    } else {
      baseUrl = `https://api.themoviedb.org/3/discover/movie`;
      response = await fetch(
        `${baseUrl}?include_adult=false&include_video=false&language=en-US&sort_by=popularity.desc&page=${page}${genreQuery}${yearQuery}${ratingQuery}`,
        options
      );
    }
    if (!response.ok) {
      throw new Error(`Failed to fetch movies: ${response.status}`);
    }
    const data = await response.json();

    // Applying filters manually if searchQuery is present (bcz api endpoint is different for searchQuery and filterQuery)
    if (searchQuery) {
      const filteredResults = data?.results?.filter((movie) => {
        const withinYearRange =
          (!minYear ||
            new Date(movie?.release_date).getFullYear() >= minYear) &&
          (!maxYear || new Date(movie?.release_date).getFullYear() <= maxYear);
        const withinRatingRange =
          (!minRating || movie?.vote_average >= minRating) &&
          (!maxRating || movie?.vote_average <= maxRating);
        const matchesGenre =
          !genre || movie?.genre_ids.includes(parseInt(genre));

        return withinYearRange && withinRatingRange && matchesGenre;
      });
      return {
        results: filteredResults,
        total_pages: data.total_pages,
      };
    }

    return data;
  } catch (error) {
    console.error("Error fetching movies:", error);
    throw error;
  }
};

export const fetchGenres = async () => {
  try {
    const response = await fetch(
      `https://api.themoviedb.org/3/genre/movie/list?language=en-US`,
      options
    );
    const data = await response.json();
    return data.genres || [];
  } catch (err) {
    console.log(err);
  }
};
