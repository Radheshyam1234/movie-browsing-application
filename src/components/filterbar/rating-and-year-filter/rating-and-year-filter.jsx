import { useState } from "react";
import { useMovieContext } from "../../../context/movie-context";
import RangeSlider from "react-range-slider-input";
import "react-range-slider-input/dist/style.css";

const RatingAndyearFilter = () => {
  const { filters, updateFilters, updateSearchQuery } = useMovieContext();
  const [localFilters, setLocalFilters] = useState(filters);

  const handleApplyFilters = () => {
    updateFilters(localFilters);
  };

  return (
    <div className="space-y-1 md:space-y-2 px-2 flex items-center gap-2 xs:gap-10">
      <div className="flex flex-col md:flex-row md:items-center gap-3 md:gap-6">
        <div className=" space-y-2 text-[#fff]">
          <div className="flex items-center gap-2">
            <p className="font-semibold">Release Year : </p>
            <p className=" text-[#acabab] font-bold">
              {localFilters?.minYear} to {localFilters?.maxYear}
            </p>
          </div>
          <div className="w-[100px] xs:w-[200px]">
            <RangeSlider
              min={1900}
              max={2025}
              value={[localFilters?.minYear, localFilters?.maxYear]}
              onInput={(value) => {
                setLocalFilters({
                  ...localFilters,
                  minYear: value?.[0],
                  maxYear: value?.[1],
                });
              }}
            />
          </div>
        </div>

        <div className=" space-y-2 text-[#fff]">
          <div className="flex items-center gap-2">
            <p className="font-semibold">Rating : </p>
            <p className=" text-[#acabab] font-bold">
              {localFilters?.minRating} to {localFilters?.maxRating}
            </p>
          </div>
          <div className="w-[100px] xs:w-[200px]">
            <RangeSlider
              min={3}
              max={9}
              value={[localFilters?.minRating, localFilters?.maxRating]}
              onInput={(value) => {
                setLocalFilters({
                  ...localFilters,
                  minRating: value?.[0],
                  maxRating: value?.[1],
                });
              }}
            />
          </div>
        </div>
      </div>
      <button
        className="text-[#fff] bg-[#1e7ae3] py-2 h-fit px-3 rounded-lg "
        onClick={handleApplyFilters}
      >
        Apply Filter
      </button>
    </div>
  );
};

export default RatingAndyearFilter;
