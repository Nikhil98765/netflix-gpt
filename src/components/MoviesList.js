import { MovieCard } from './MovieCard';

export const MoviesList = ({ title, movies }) => {
  return (
    <div className="px-6">
      <h1 className="text-xl md:text-3xl py-4 text-white">{title}</h1>
      <div className="flex overflow-x-auto">
        <div className="flex">
          {movies?.map((movie) => (
            <MovieCard key={movie.id} posterPath={movie.poster_path} />
          ))}
        </div>
      </div>
    </div>
  );
};
