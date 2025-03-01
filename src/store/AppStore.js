import { configureStore } from "@reduxjs/toolkit";

import userReducer from './UserSlice';
import moviesReducer from './MoviesSlice';

export const appStore = configureStore({
  reducer: {
    user: userReducer,
    movies: moviesReducer
  }
});
