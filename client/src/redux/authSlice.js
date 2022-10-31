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
      success: false,
    },
    logout: {
      isFetching: false,
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
      state.logout.isFetching = true;
    },
    logoutUserSuccess: (state, action) => {
      state.logout.isFetching = false;
      state.msg = action.payload;
    },
    logoutUserFail: (state, action) => {
      state.logout.isFetching = false;
      state.logout.error = true;
      // state.msg = action.payload;
    },
  },
});

export const {
  loginStart,
  loginFailed,
  loginSuccess,
  registerStart,
  registerSuccess,
  registerFailed,
  logoutUserStart,
  logoutUserSuccess,
  logoutUserFail,
} = authSlice.actions;

export default authSlice.reducer;
