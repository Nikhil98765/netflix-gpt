import React, { useRef } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import lang from '../i18n/languageConstants';
import { client } from '../utils/openAI';
import { API_OPTIONS } from '../utils/constants';
import { addGptMovieResults } from '../store/GptSlice';

export const GptSearchBar = () => {
  const preferredLanguage = useSelector((state) => state.config.lang);
  const searchInputRef = useRef(null);
  const dispatch = useDispatch();

  const searchMovieTMDB = async (movieName) => {
    const data = await fetch(
      `https://api.themoviedb.org/3/search/movie?query=${movieName}`,
      API_OPTIONS
    );
    const json = await data.json();
    return json.results;
  };

  const fetchGPTResults = async (searchText) => {
    const gptQuery = `Act as a movie recommendation system and suggest some movies for the query: ${searchText}. only give me names of 5 movies, comma separated like the example result given ahead. Example: gadar 2, koi mil gya, salaar, dragon, kiccha`;
    const chatCompletion = await client.chat.completions.create({
      messages: [{ role: 'user', content: gptQuery }],
      model: 'gpt-3.5-turbo'
    });

    const gptMoviesNames = chatCompletion.choices[0].message.content.split(', ');

    const movieResults = gptMoviesNames.map(async (movie) => searchMovieTMDB(movie));

    const tmdbResults = await Promise.all(movieResults);
    dispatch(
      addGptMovieResults({
        movieResults: tmdbResults,
        movieNames: gptMoviesNames
      })
    );
  };

  const handleSearch = async (event) => {
    event.preventDefault();
    const inputValue = searchInputRef.current.value;
    await fetchGPTResults(inputValue);
  };

  return (
    <div className="pt-[40%] md:pt-[10%] flex justify-center">
      <form
        className="w-screen rounded-lg md:w-1/2 p-2 m-1 md:p-6 md:m-6 grid grid-cols-12 bg-black"
        onSubmit={handleSearch}>
        <input
          ref={searchInputRef}
          type="text"
          className="p-3 m-3 md:p-4 md:m-4 col-span-9 rounded-lg"
          placeholder={lang[preferredLanguage].placeholder}
        />
        <button className="bg-red-500 text-white py-1 px-2 m-3 md:py-2 md:px-4 md:m-4 rounded-lg col-span-3">
          {lang[preferredLanguage].search}
        </button>
      </form>
    </div>
  );
};
