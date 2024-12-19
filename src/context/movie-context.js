import React, { createContext, useContext, useState } from "react";

const MovieContext = createContext();

export const useMovieContext = () => useContext(MovieContext);

export const MovieProvider = ({ children }) => {
  const [favorites, setFavorites] = useState([]);
  const [filters, setFilters] = useState({
    genre: "",
    minYear: "",
    maxYear: "",
    minRating: 0,
    maxRating: 10,
  });
  const [searchQuery, setSearchQuery] = useState("");

  const addToFavourite = (movie) => {
    setFavorites((prev) =>
      prev.some((fav) => fav.id === movie.id)
        ? prev.filter((fav) => fav.id !== movie.id)
        : [...prev, movie]
    );
  };

  const updateFilters = (newFilters) => {
    setFilters((prev) => ({ ...prev, ...newFilters }));
  };

  const updateSearchQuery = (query) => setSearchQuery(query);

  return (
    <MovieContext.Provider
      value={{
        favorites,
        addToFavourite,
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
