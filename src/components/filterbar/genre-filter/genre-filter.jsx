import { fetchGenres } from "../../../utils/api";
import useGenreFilter from "./use-genre-filter";

const GenreFilter = () => {
  const { genresData, selectedGenre, handleGenreClick } = useGenreFilter();

  return (
    <div className="py-1 md:py-2 ">
      <div className="w-full overflow-auto no-scrollbar inline-flex gap-2">
        {genresData?.map((genre) => {
          return (
            <div
              className={`px-2 py-1 cursor-pointer  rounded-lg inline-block text-center ${
                selectedGenre === genre?.id
                  ? "bg-[#171717] text-[#fff] "
                  : "bg-[#dfdddd]"
              }`}
              key={genre?.id}
              onClick={() => {
                handleGenreClick(selectedGenre === genre?.id ? "" : genre?.id);
              }}
            >
              <p className="whitespace-nowrap font-medium">
                {genre?.name}{" "}
                {selectedGenre === genre?.id && (
                  <span className="text-red-500">&#10008;</span>
                )}
              </p>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default GenreFilter;
