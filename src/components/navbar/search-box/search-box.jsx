import { useEffect, useState } from "react";
import { useMovieContext } from "../../../context/movie-context";
import useDebounce from "../../../hooks/use-debounce";

const SearchBox = () => {
  const { updateSearchQuery } = useMovieContext();
  const [searchText, setSearchText] = useState("");
  const debouncedSearch = useDebounce(searchText, 500);

  useEffect(() => {
    updateSearchQuery(debouncedSearch);
  }, [debouncedSearch, updateSearchQuery]);

  return (
    <div className="p-2 bg-[#fff] border rounded-lg w-[60vw]">
      <input
        type="search"
        className="w-full  outline-none rounded-lg"
        placeholder="Search by movie name..."
        value={searchText}
        onChange={(e) => setSearchText(e.target.value)}
      />
    </div>
  );
};

export default SearchBox;
