import HeartFillIcon from "../../assets/icons/heart-filled-icon.svg";
import SearchBox from "./search-box/search-box";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <header
      role="banner"
      aria-label="Site header"
      className="flex justify-between shadow-lg p-2.5 sticky top-0 bg-gray-800 z-20  px-4 md:px-10"
    >
      <Link to="/">
        <p className="hidden md:block text-2xl font-semibold text-green-700">
          Movie Sagar
        </p>
      </Link>

      <SearchBox />
      <Link to="/favourite">
        <div className="flex justify-center h-10 w-10 p-1.5 rounded-full bg-[#fff] ">
          <img src={HeartFillIcon} alt="favourite.svg" className="" />
        </div>
      </Link>
    </header>
  );
};

export default Navbar;
