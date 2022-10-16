import axios from 'axios';
import { getImageAndDescriptionRoute } from '../routes/APIRoute';
import { getInfoFailed, getInfoStart, getInfoSuccess } from './mapSlice';
// import { deleteUserRoute, getAllUsersRoute, loginRoute, registerRoute } from '../utils/APIRoutes';

export const getImageDescriptionByNameSearch = async (name, dispatch) => {
    dispatch(getInfoStart());
    try {
        const res = await axios.post(getImageAndDescriptionRoute, {
            name: name
        });
        // console.log(res.data);
        dispatch(getInfoSuccess(res.data));
    } catch (error) {
        dispatch(getInfoFailed(error))
    }
}






