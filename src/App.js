import { MovieProvider } from "./context/movie-context";
import Home from "./pages/homepage/homepage";

function App() {
  return (
    <MovieProvider>
      <Home />
    </MovieProvider>
  );
}

export default App;
