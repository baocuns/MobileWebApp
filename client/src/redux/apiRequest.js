// import { deleteUserRoute, getAllUsersRoute, loginRoute, registerRoute } from '../utils/APIRoutes';
import axios from 'axios';
import {
  getImageAndDescriptionRoute,
  loginRoute,
  registerRoute,
} from '../routes/APIRoute';
import {getInfoFailed, getInfoStart, getInfoSuccess} from './mapSlice';

import {
  loginFailed,
  loginStart,
  loginSuccess,
  registerStart,
  registerSuccess,
  registerFailed,
  logoutUserStart,
  logoutUserSuccess,
  logoutUserFail,
} from './authSlice';

import {getUsersStart, getUsersFail, getUsersSuccess} from './userSilce';

export const getImageDescriptionByNameSearch = async (name, dispatch) => {
  dispatch(getInfoStart());
  try {
    const res = await axios.post(getImageAndDescriptionRoute, {
      name: name,
    });
    // console.log(res.data);
    dispatch(getInfoSuccess(res.data));
  } catch (error) {
    dispatch(getInfoFailed(error));
  }
};

export const loginUser = async (username, password, dispatch, navigation) => {
  dispatch(loginStart());
  // console.log('>>>check nav: ', navigation);

  try {
    const res = await axios.post(loginRoute, {
      username: username,
      password: password,
    });
    console.log('>>>check login: ', res.data);
    alert('bạn đã đăng nhập thành công');
    dispatch(loginSuccess(res.data));
    navigation.navigate('Home');
  } catch (error) {
    alert('sai username hay password rồi kìa');
    dispatch(loginFailed());
  }
};

export const registerUser = async (
  username,
  password,
  email,
  dispatch,
  navigation,
) => {
  dispatch(registerStart());
  // console.log('>>>check nav: ', navigation);
  try {
    const res = await axios.post(registerRoute, {
      username: username,
      password: password,
      email: email,
    });
    // console.log('>>>check register: ', res.data);
    alert('bạn đã đăng kí thành công');
    dispatch(registerSuccess(res.data));
    navigation.navigate('Login');
  } catch (error) {
    alert('đã có tài khoản như vậy rồi nha');
    dispatch(registerFailed());
  }
};

export const LogoutUser = async (accessToken, dispatch, id) => {
  dispatch(logoutUserStart());
  try {
    const res = await axios.post('v1/auth/logout' + id, {
      Headers: {token: `Bearer ${accessToken}`},
    });
    dispatch(logoutUserSuccess(res.data));
  } catch (err) {
    dispatch(logoutUserFail(err.reponse.data));
  }
};

// export const getAllUsers = async (accessToken, dispatch) => {
//   dispatch(getUsersStart());
//   try {
//     const res = await axios.get('/v1/auth/user/show/details', {
//       headers: {token: `Bearer ${accessToken}`},
//     });

//     dispatch(getUsersSuccess(res.data));
//   } catch (error) {
//     dispatch(getUsersFail());
//   }
// };
