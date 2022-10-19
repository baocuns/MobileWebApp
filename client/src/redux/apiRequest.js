import axios from 'axios';
import {getImageAndDescriptionRoute, loginRoute} from '../routes/APIRoute';
import {loginFailed, loginStart, loginSuccess} from './authSlice';
import {getInfoFailed, getInfoStart, getInfoSuccess} from './mapSlice';

// import {registerStart, registerFailed, registerSuccess} from './registerSlice';
// import { deleteUserRoute, getAllUsersRoute, loginRoute, registerRoute } from '../utils/APIRoutes';

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
  console.log('>>>check nav: ', navigation);

  try {
    const res = await axios.post(loginRoute, {
      username: username,
      password: password,
    });
    // console.log('>>>check login: ', res.data);
    dispatch(loginSuccess(res.data));
    navigation.navigate('Home');
  } catch (error) {
    dispatch(loginFailed());
  }
};
