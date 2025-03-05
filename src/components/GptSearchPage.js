import React from 'react';
import { NETFLIX_BG_IMG } from '../utils/constants';
import { GptSearchBar } from './GptSearchBar';
import { GptMovieSuggestions } from './GptMovieSuggestions';

export const GptSearchPage = () => {
  return (
    <div>
      <div className="absolute -z-10">
        <img src={NETFLIX_BG_IMG} alt="Netflix Logo" />
      </div>
      <GptSearchBar />
      <GptMovieSuggestions />
    </div>
  );
};
