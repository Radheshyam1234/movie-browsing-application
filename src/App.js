import FavouritesMovies from "./pages/favourites-movies/favourites-movies";
import HomePage from "./pages/homepage/homepage";
import { Routes, Route } from "react-router-dom";

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/favourite" element={<FavouritesMovies />} />
      </Routes>
    </>
  );
}

export default App;
