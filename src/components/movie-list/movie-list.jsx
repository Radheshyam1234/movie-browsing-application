import React from "react";
import MovieCard from "../movie-card/movie-card";

const MovieList = ({ movies, isLoading }) => {
  return (
    <>
      {movies?.length > 0 ? (
        <div className="grid grid-cols-1 xs:grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-4">
          {movies?.map((movie) => (
            <MovieCard key={movie.id} movie={movie} />
          ))}
        </div>
      ) : (
        <>
          {!isLoading && (
            <div className="pt-20 w-full h-full flex justify-center items-center text-[#fff] text-xl font-bold">
              No any movies available according to your search & filter
            </div>
          )}
        </>
      )}
    </>
  );
};

export default MovieList;
