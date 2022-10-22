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
} from './authSlice';
import {Alert} from 'react-native';

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
    // console.log('>>>check login: ', res.data);
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
