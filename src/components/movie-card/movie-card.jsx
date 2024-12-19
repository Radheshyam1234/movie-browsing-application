import React from "react";
import { useMovieContext } from "../../context/movie-context";

const MovieCard = ({ movie }) => {
  const { addToFavourite, favorites } = useMovieContext();
  const isFavorite = favorites.some((fav) => fav.id === movie.id);

  return (
    <div className="p-4 border">
      <img
        src={`https://image.tmdb.org/t/p/w500/${movie.poster_path}`}
        alt={`${movie.title} Poster`}
        className="h-[300px] w-[200px]"
      />
      <h3>{movie.title}</h3>
      <button
        onClick={() => addToFavourite(movie)}
        className={isFavorite ? "bg-red-500" : "bg-gray-500"}
      >
        {isFavorite ? "Remove from Favorites" : "Add to Favorites"}
      </button>
    </div>
  );
};

export default MovieCard;
