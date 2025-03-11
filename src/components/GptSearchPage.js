import { NETFLIX_BG_IMG } from '../utils/constants';
import { GptSearchBar } from './GptSearchBar';
import { GptMovieSuggestions } from './GptMovieSuggestions';

export const GptSearchPage = () => {
  return (
    <div>
      <div className="fixed -z-10">
        <img className="h-screen object-cover md:h-auto" src={NETFLIX_BG_IMG} alt="Netflix Logo" />
      </div>
      <GptSearchBar />
      <GptMovieSuggestions />
    </div>
  );
};
