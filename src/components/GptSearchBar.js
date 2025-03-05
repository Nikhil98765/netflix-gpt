import React from 'react';

import lang from '../i18n/languageConstants';
import { useSelector } from 'react-redux';

export const GptSearchBar = () => {
  const preferredLanguage = useSelector((state) => state.config.lang);

  return (
    <div className="pt-[10%] flex justify-center">
      <form className="w-1/2 p-6 m-6 grid grid-cols-12 bg-black">
        <input
          type="text"
          className="p-4 m-4 col-span-9 rounded-lg"
          placeholder={lang[preferredLanguage].placeholder}
        />
        <button className="bg-red-500 text-white py-2 px-4 m-4 rounded-lg col-span-3">
          {lang[preferredLanguage].search}
        </button>
      </form>
    </div>
  );
};
