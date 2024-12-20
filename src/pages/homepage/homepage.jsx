import MovieList from "../../components/movie-list/movie-list";

import CircleLoader from "../../components/loaders/circle-loader";
import PageContainer from "../../components/page-container/page-container";
import useHomepage from "./use-homepage";

export default function HomePage() {
  const { isLoading, movies } = useHomepage();
  return (
    <PageContainer>
      <MovieList movies={movies} isLoading={isLoading} />
      {isLoading && (
        <div className="py-10 h-full w-full flex justify-center items-center">
          <CircleLoader />
        </div>
      )}
    </PageContainer>
  );
}
