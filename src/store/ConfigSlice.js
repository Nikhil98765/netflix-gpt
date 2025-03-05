import { createSlice } from '@reduxjs/toolkit';

const ConfigSlice = createSlice({
  name: 'config',
  initialState: {
    lang: 'en'
  },
  reducers: {
    changeLanguage: (state, { payload }) => {
      state.lang = payload;
    }
  }
});

export const { changeLanguage } = ConfigSlice.actions;
export default ConfigSlice.reducer;
