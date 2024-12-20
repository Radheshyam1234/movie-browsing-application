import { useCallback, useEffect, useState } from "react";
import { useMovieContext } from "../../context/movie-context";
import { useGenres } from "../../hooks/use-genres";
import useInfiniteScroll from "../../hooks/use-infinite-scroll";
import { fetchMovies } from "../../utils/api";

const useHomepage = () => {
  const { filters, searchQuery } = useMovieContext();
  const [movies, setMovies] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [isLoading, setIsLoading] = useState(false);
  const [hasMore, setHasMore] = useState(true);

  const loadMoreMovies = useCallback(async () => {
    if (isLoading || !hasMore) return;
    setIsLoading(true);
    const { results, total_pages } = await fetchMovies(
      currentPage,
      filters,
      searchQuery
    );

    if (currentPage >= total_pages) setHasMore(false);

    setMovies((prev) => [...prev, ...results]);
    setCurrentPage((prev) => prev + 1);
    setIsLoading(false);
  }, [currentPage, filters, searchQuery, isLoading, hasMore]);

  useEffect(() => {
    const fetchInitialMovies = async () => {
      setIsLoading(true);
      const { results, total_pages } = await fetchMovies(
        1,
        filters,
        searchQuery
      );

      setMovies(results);
      setCurrentPage(2);
      setHasMore(true);
      setIsLoading(false);
    };

    fetchInitialMovies();
  }, [filters, searchQuery]);

  useInfiniteScroll(loadMoreMovies, isLoading);

  return {
    isLoading,
    movies,
  };
};

export default useHomepage;
