import {createSlice} from '@reduxjs/toolkit';

const authSlice = createSlice({
  name: 'auth',
  initialState: {
    login: {
      currentUser: null,
      isFetching: false,
      error: false,
    },
    register: {
      isFetching: false,
      error: false,
    },

    // msg: '',
  },

  reducers: {
    loginStart: state => {
      state.login.isFetching = true;
    },
    loginSuccess: (state, action) => {
      state.login.isFetching = false;
      state.login.currentUser = action.payload;
      state.login.error = false;
    },

    loginFailed: state => {
      state.login.isFetching = true;
      state.login.error = true;
    },

    registerStart: state => {
      state.register.isFetching = true;
    },
    registerSuccess: state => {
      state.register.isFetching = false;
      state.register.error = false;
      state.register.success = true;
    },

    registerFailed: state => {
      state.register.isFetching = true;
      state.register.error = true;
      state.register.success = false;
    },
    logoutUserStart: state => {
      state.login.isFetching = true;
    },
    logoutUserSuccess: state => {
      state.login.isFetching = false;
      state.login.currentUser = null;
      state.login.error = false;
      // state.msg = action.payload;
    },
    logoutUserFail: state => {
      state.login.isFetching = false;
      state.login.error = true;
      // state.msg = action.payload;
    },
  },
});

export const {
  // login
  loginStart,
  loginFailed,
  loginSuccess,
  // logout
  registerStart,
  registerSuccess,
  registerFailed,
  // logout
  logoutUserStart,
  logoutUserSuccess,
  logoutUserFail,
} = authSlice.actions;

export default authSlice.reducer;
