import { useEffect, useState } from "react";

const API_KEY = "YOUR_API_KEY";

export const useGenres = () => {
  const [genres, setGenres] = useState([]);
  const [error, setError] = useState(null);

  const options = {
    method: "GET",
    headers: {
      accept: "application/json",
      Authorization:
        "Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJlMTc4Y2JmMGQzOWU5MzNiMWJiNGEzYWQzZjU0NGY3ZiIsIm5iZiI6MTczNDUzNjY0MC4zMTIsInN1YiI6IjY3NjJlZGMwNTVjZDJkZWM5OGZmZTlhNyIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.t7F0cHnXoEsOpGDm7d8Am3S8aWpbqvUewmb0jqgQXxE",
    },
  };

  useEffect(() => {
    const fetchGenres = async () => {
      try {
        const response = await fetch(
          `https://api.themoviedb.org/3/genre/movie/list?language=en-US`,
          options
        );
        const data = await response.json();
        setGenres(data.genres || []);
        console.log(data, "generes");
      } catch (err) {
        setError(err.message);
      }
    };

    fetchGenres();
  }, []);

  return { genres, error };
};
