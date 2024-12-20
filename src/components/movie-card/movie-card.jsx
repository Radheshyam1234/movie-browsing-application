import { useMovieContext } from "../../context/movie-context";
import HeartEmptyIcon from "../../assets/icons/heart-empty-icon.svg";
import HeartFilledIcon from "../../assets/icons/heart-filled-icon.svg";
import MovieDetailsModal from "./movie-details-modal/movie-details-modal";
import { useState } from "react";

const MovieCard = ({ movie }) => {
  const { handleAddToFavouriteMoviesList, favouriteMovies } = useMovieContext();
  const isFavourite = favouriteMovies?.find((fav) => fav?.id === movie?.id);

  const [openDetailsPopUp, setOpenDetailsPopUp] = useState(false);
  const handleDetailsPopUp = () => {
    setOpenDetailsPopUp((prev) => !prev);
  };

  return (
    <>
      <div
        className="bg-[#fff] p-2 border rounded-lg space-y-2.5 cursor-pointer relative"
        onClick={handleDetailsPopUp}
      >
        <div className="h-[300px]">
          <img
            src={`https://image.tmdb.org/t/p/w500/${movie?.poster_path}`}
            alt={`${movie?.title} Poster`}
            className="w-full rounded-lg object-fill h-full "
            loading="lazy"
            aria-label={`Movie card for ${movie?.title}`}
          />
        </div>

        <div className="space-y-1">
          <p className="font-medium text:sm lg:text-base truncate">
            {movie.title}
          </p>
          <div className="flex justify-between items-center">
            <p className="font-bold text-sm lg:text-lg text-pink-800">
              {movie?.release_date &&
                new Date(movie?.release_date)?.getFullYear()}
            </p>

            <div className="px-2 py-1 w-10 flex justify-center rounded-3xl  bg-slate-950 font-semibold text-xs lg:text-sm text-[#fff]">
              {Number(movie?.vote_average)?.toFixed(1)}
            </div>
          </div>
        </div>
        <div
          className="h-8 w-8 rounded-full p-1 flex justify-center items-center bg-[#f4f2f2] absolute right-4 top-0"
          aria-label="Add To Favourites"
        >
          <img
            src={isFavourite ? HeartFilledIcon : HeartEmptyIcon}
            onClick={(e) => {
              e?.stopPropagation();
              handleAddToFavouriteMoviesList(movie);
            }}
          />
        </div>
      </div>
      {openDetailsPopUp && (
        <MovieDetailsModal
          isOpen={true}
          onClose={handleDetailsPopUp}
          movie={movie}
        />
      )}
    </>
  );
};

export default MovieCard;
