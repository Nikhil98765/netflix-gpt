import { configureStore } from "@reduxjs/toolkit";

import userReducer from './UserSlice';

export const appStore = configureStore({
  reducer: {
    user: userReducer
  }
});
