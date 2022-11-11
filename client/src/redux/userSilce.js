import { createSlice } from '@reduxjs/toolkit';

const userSlice = createSlice({
  name: 'user',
  initialState: {
    users: {
      allUsers: null,
      isFetching: false,
      error: false,
    },
    language: "en"
  },
  reducers: {
    getUsersStart: state => {
      state.users.isFetching = true;
    },
    getUsersSuccess: (state, action) => {
      state.users.isFetching = false;
      state.users.allUsers = action.payload;
    },
    getUsersFail: state => {
      state.users.isFetching = false;
      state.users.error = true;
    },
    setLanguage: (state, action) => {
      state.language = action.payload;
    }
  },
});

export const { getUsersStart, getUsersFail, getUsersSuccess, setLanguage } = userSlice.actions;

export default userSlice.reducer;
