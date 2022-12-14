// import { deleteUserRoute, getAllUsersRoute, loginRoute, registerRoute } from '../utils/APIRoutes';
import axios from 'axios';
import {
  getImageAndDescriptionRoute,
  loginRoute,
  logoutRoute,
  registerRoute,
  sendRatingRoute,
  usersInfoRoute,
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
  getUsersStart,
  getUsersSuccess,
  getUsersFail,
  resetUser,
} from './authSlice';

// import { getUsersStart, getUsersFail, getUsersSuccess } from './userSilce';
import {combineReducers} from 'redux';

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
    console.log('>>>check login: ', res.data.data);
    alert('bạn đã đăng nhập thành công');
    dispatch(loginSuccess(res.data.data));
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
    console.log('>>>check register: ', res.data.data);
    alert('bạn đã đăng kí thành công');
    dispatch(registerSuccess(res.data));
    navigation.navigate('LoginNew');
  } catch (error) {
    alert('đã có tài khoản như vậy rồi nha');
    dispatch(registerFailed());
  }
};

export const logoutUser = async (accessToken, dispatch) => {
  dispatch(logoutUserStart());
  try {
    const res = await axios.post(
      logoutRoute,
      {a: 1},
      {
        headers: {token: `Travel ${accessToken}`},
      },
    );
    dispatch(logoutUserSuccess(res.data));
    dispatch(resetUser());
    alert('đăng xuất thành công');
    // navigation.navigate('Users');
  } catch (error) {
    // alert('đang xuất thất bại');
    console.log(error);
    dispatch(logoutUserFail(error));
    alert('đang xuất thất bại');
  }
};

export const userInfo = async (
  fullname,
  email,
  phone,
  birthday,
  sex,
  country,
  address,
  image,
  dispatch,
  accessToken,
) => {
  dispatch(getUsersStart());
  try {
    const res = await axios.post(usersInfoRoute, {
      headers: {token: `Travel ${accessToken}`},
      fullname: fullname,
      email: email,
      phone: phone,
      birthday: birthday,
      sex: sex,
      country: country,
      address: address,
      image: image,
    });
    console.log(res.data);
    dispatch(getUsersSuccess(res.data));
  } catch (error) {
    // console.log(res.data)
    dispatch(getUsersFail());
  }
};

export const sendRatingAction = async (
  accessToken,
  userID,
  numberStar,
  ratingCotent,
  tourID,
) => {
  try {
    const res = await axios.post(
      sendRatingRoute,
      {
        content: ratingCotent,
        rate: numberStar,
        parent_id: tourID,
      },
      {
        headers: {
          _id: userID,
          token: `Travel ${accessToken}`,
        },
      },
    );
    return res;
  } catch (error) {
    return error.response.data;
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
