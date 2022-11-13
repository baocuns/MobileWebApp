
import { createSlice } from '@reduxjs/toolkit';

const statusSlice = createSlice({
  name: 'status',
  initialState: {
    language: "en",
    theme: null
  },
  reducers: {
    setLanguage: (state, action) => {
      state.language = action.payload;
    },
    setTheme: (state, action) => {
      state.theme = action.payload
    }
  },
});

export const { setLanguage, setTheme } = statusSlice.actions;

export default statusSlice.reducer;
