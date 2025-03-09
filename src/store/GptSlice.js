import { createSlice } from '@reduxjs/toolkit';

const GptSlice = createSlice({
  name: 'gpt',
  initialState: {
    showGptSearch: false,
    movieNames: null,
    movieResults: null
  },
  reducers: {
    toggleGptSearchView: (state) => {
      state.showGptSearch = !state.showGptSearch;
    },
    addGptMovieResults: (state, action) => {
      const { movieNames, movieResults } = action.payload;
      state.movieResults = movieResults;
      state.movieNames = movieNames;
    }
  }
});

export const { toggleGptSearchView, addGptMovieResults } = GptSlice.actions;

export default GptSlice.reducer;
