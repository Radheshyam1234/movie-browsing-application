import React from "react";
import PageContainer from "../../components/page-container/page-container";
import { useMovieContext } from "../../context/movie-context";
import MovieCard from "../../components/movie-card/movie-card";

const FavouritesMovies = () => {
  const { favouriteMovies } = useMovieContext();

  return (
    <PageContainer>
      {favouriteMovies?.length > 0 ? (
        <div className="grid grid-cols-1 xs:grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-4">
          {favouriteMovies?.map((movie) => (
            <MovieCard key={movie.id} movie={movie} />
          ))}
        </div>
      ) : (
        <div className="pt-20 w-full h-full flex justify-center items-center text-[#fff] text-xl font-bold">
          No any movies added to favourite
        </div>
      )}
    </PageContainer>
  );
};

export default FavouritesMovies;
