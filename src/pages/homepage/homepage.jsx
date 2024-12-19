import React, { useCallback, useEffect, useState } from "react";
import MovieList from "../../components/movie-list/movie-list";
import { useMovieContext } from "../../context/movie-context";
import { useGenres } from "../../hooks/use-genres";
import useInfiniteScroll from "../../hooks/use-infinite-scroll";
import { fetchMovies } from "../../utils/api";
import CircleLoader from "../../components/loaders/circle-loader";
import PageContainer from "../../components/page-container/page-container";

export default function Home() {
  const { filters, searchQuery } = useMovieContext();
  const [movies, setMovies] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [isLoading, setIsLoading] = useState(false);
  const [hasMore, setHasMore] = useState(true);

  const { genres } = useGenres();

  // Fetch movies and append them to the list
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

  // Fetch initial movies when filters change
  useEffect(() => {
    const fetchInitialMovies = async () => {
      setIsLoading(true);
      const { results, total_pages } = await fetchMovies(
        1,
        filters,
        searchQuery
      );

      setMovies(results);
      setCurrentPage(2); // Start loading from page 2 for infinite scroll
      setHasMore(true);
      setIsLoading(false);
    };

    fetchInitialMovies();
  }, [filters, searchQuery]);

  // Attach infinite scrolling
  useInfiniteScroll(loadMoreMovies, isLoading);

  return (
    <PageContainer>
      <MovieList movies={movies} />
      {isLoading && (
        <div className="h-100px w-full flex justify-center">
          <CircleLoader />
        </div>
      )}
    </PageContainer>
  );
}
