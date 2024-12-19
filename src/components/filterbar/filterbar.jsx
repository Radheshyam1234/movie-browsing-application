import React, { useEffect, useState } from "react";
import { useMovieContext } from "../../context/movie-context";
import useDebounce from "../../hooks/use-debounce";

const FilterBar = () => {
  const { filters, updateFilters, updateSearchQuery } = useMovieContext();
  const [localFilters, setLocalFilters] = useState(filters);
  const [localSearch, setLocalSearch] = useState("");
  const debouncedSearch = useDebounce(localSearch, 500);

  const handleApplyFilters = () => {
    updateFilters(localFilters);
  };
  useEffect(() => {
    updateSearchQuery(debouncedSearch);
  }, [debouncedSearch, updateSearchQuery]);

  return (
    <div className="p-4">
      <input
        type="text"
        placeholder="Search by movie name..."
        value={localSearch}
        onChange={(e) => setLocalSearch(e.target.value)}
        className="border rounded px-4 py-2"
      />
      <input
        type="number"
        placeholder="Min Year"
        value={localFilters.minYear}
        onChange={(e) =>
          setLocalFilters({ ...localFilters, minYear: e.target.value })
        }
      />
      <input
        type="number"
        placeholder="Max Year"
        value={localFilters.maxYear}
        onChange={(e) =>
          setLocalFilters({ ...localFilters, maxYear: e.target.value })
        }
      />
      <button onClick={handleApplyFilters}>Apply Filters</button>
    </div>
  );
};

export default FilterBar;
