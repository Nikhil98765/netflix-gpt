import { useSelector } from "react-redux"
import { MoviesList } from "./MoviesList";

export const SecondaryContainer = () => {

  const movies = useSelector(state => state.movies);

  if (!movies) return;

  return (
    <div className="bg-black">
      <div className="-mt-80 pl-12 z-20 relative">
        <MoviesList title="Now Playing" movies={movies?.nowPlayingMovies} />
        <MoviesList title="Top Rated" movies={movies?.topRatedMovies} />
        <MoviesList title="Popular" movies={movies?.popularMovies} />
        <MoviesList title="Upcoming Movies" movies={movies?.upcomingMovies} />
      </div>
    </div>
  );
}
