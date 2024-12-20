import GenreFilter from "./genre-filter/genre-filter";
import RatingAndyearFilter from "./rating-and-year-filter/rating-and-year-filter";

const FilterBar = () => {
  return (
    <div className="space-y-2 md:space-y-4  px-4 md:px-10">
      <GenreFilter />
      <RatingAndyearFilter />
    </div>
  );
};

export default FilterBar;
