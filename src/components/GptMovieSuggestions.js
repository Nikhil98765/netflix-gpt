import { MoviesList } from './MoviesList';
import { useSelector } from 'react-redux';

export const GptMovieSuggestions = () => {
  const { movieNames, movieResults } = useSelector((state) => state.gpt);

  if (!movieNames) return null;

  return (
    <div className="bg-black bg-opacity-80">
      {movieNames.map((movieName, index) => (
        <MoviesList key={movieName} title={movieName} movies={movieResults[index]} />
      ))}
    </div>
  );
};
