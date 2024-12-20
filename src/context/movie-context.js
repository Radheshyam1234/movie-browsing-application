import React, { createContext, useContext, useEffect, useState } from "react";

const MovieContext = createContext();

export const useMovieContext = () => useContext(MovieContext);

export const MovieProvider = ({ children }) => {
  const [filters, setFilters] = useState({
    genre: "",
    minYear: 1950,
    maxYear: 2024,
    minRating: 0,
    maxRating: 10,
  });
  const updateFilters = (newFilters) => {
    setFilters((prev) => ({ ...prev, ...newFilters }));
  };
  const [searchQuery, setSearchQuery] = useState("");
  const updateSearchQuery = (query) => setSearchQuery(query);

  const [favouriteMovies, setFavouriteMovies] = useState(() => {
    const storedFavourites = localStorage.getItem("favouriteMovies");
    return storedFavourites ? JSON.parse(storedFavourites) : [];
  });

  const handleAddToFavouriteMoviesList = (movie) => {
    setFavouriteMovies((prev) => {
      const isFavourite = prev?.some((fav) => fav?.id === movie?.id);
      const updatedFavorites = isFavourite
        ? prev.filter((fav) => fav?.id !== movie?.id)
        : [...prev, movie];
      localStorage.setItem("favouriteMovies", JSON.stringify(updatedFavorites));
      return updatedFavorites;
    });
  };

  return (
    <MovieContext.Provider
      value={{
        favouriteMovies,
        handleAddToFavouriteMoviesList,
        filters,
        updateFilters,
        searchQuery,
        updateSearchQuery,
      }}
    >
      {children}
    </MovieContext.Provider>
  );
};
