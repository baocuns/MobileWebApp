// import {createSlice} from '@reduxjs/toolkit';

// const registerSlice = createSlice({
//   name: 'regis',
//   initialState: {
//     register: {
//       currentUser: null,
//       isFetching: false,
//       error: false,
//     },
//   },

//   reducers: {
//     registerStart: state => {
//       state.register.isFetching = true;
//     },
//     registerSuccess: (state, action) => {
//       state.register.isFetching = false;
//       state.register.currentUser = action.payload;
//       state.register.error = false;
//     },

//     registerFailed: state => {
//       state.register.isFetching = true;
//       state.register.error = true;
//     },
//   },
// });

// export const {registerStart, registerFailed, registerSuccess} =
//   registerSlice.actions;
// export default registerSlice.reducer;
