import { useEffect } from "react";

const MovieDetailsModal = ({ movie, isOpen, onClose }) => {
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }

    return () => {
      document.body.style.overflow = "";
    };
  }, [isOpen]);
  if (!isOpen || !movie) return null;

  return (
    <>
      <div className="fixed inset-0 bg-[#252424] bg-opacity-50 flex justify-center items-center z-30">
        <div className="bg-white p-4 rounded-lg max-w-[85%] md:max-w-[60%] max-h-[80vh] relative overflow-auto no-scrollbar">
          <button
            onClick={onClose}
            className="absolute bg-red-800 text-[#fff] p-2 font-semibold rounded-md top-2 right-2"
          >
            Close
          </button>
          <h2 className="text-2xl font-bold">{movie.title}</h2>
          <p className="mt-4">{movie.overview}</p>
          <img
            src={`https://image.tmdb.org/t/p/w500/${movie.poster_path}`}
            alt={`${movie.title} poster`}
            className="mt-4 rounded-lg h-full w-full object-contain"
          />
        </div>
      </div>
    </>
  );
};

export default MovieDetailsModal;
