import {createSlice} from '@reduxjs/toolkit';
const initialState = {
  favourite: {
    isFetching: false,
    error: false,
    tour: [],
  },
  nearSaw: {
    isFetching: false,
    error: false,
    tour: [],
  },
};
const tourSlice = createSlice({
  name: 'tour',
  initialState,
  reducers: {
    saveFavouriteTour: (state, action) => {
      state.favourite.tour.unshift(action.payload);
    },
    saveNearSawTour: (state, action) => {
      state.nearSaw.tour.unshift(action.payload);
    },
    deleteFavouriteTour(state, action) {
      state.favourite.tour = action.payload;
    },
    reset: () => initialState,
  },
});

export const {saveFavouriteTour, saveNearSawTour, deleteFavouriteTour, reset} =
  tourSlice.actions;

export default tourSlice.reducer;
