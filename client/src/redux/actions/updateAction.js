import { POSITION_DEFAULT } from "../reducers/infoReducer";


export const updateDefaultPosition = (position) => async dispatch => {
    try {
        dispatch({
            type: POSITION_DEFAULT,
            position: position
        })
    } catch (error) {
        console.log(error);
    }
}

