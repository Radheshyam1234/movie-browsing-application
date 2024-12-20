import { useEffect, useState } from "react";
import { fetchGenres } from "../../../utils/api";
import { useMovieContext } from "../../../context/movie-context";

const useGenreFilter = () => {
  const { filters, updateFilters } = useMovieContext();
  const [genresData, setGenresData] = useState([]);

  const handleGetGenresData = async () => {
    const data = await fetchGenres();
    setGenresData(data);
  };

  const handleGenreClick = (genre) => {
    updateFilters({ genre: genre?.id });
  };

  useEffect(() => {
    handleGetGenresData();
  }, []);

  return {
    genresData,
    handleGenreClick,
    selectedGenre: filters?.genre,
  };
};

export default useGenreFilter;
