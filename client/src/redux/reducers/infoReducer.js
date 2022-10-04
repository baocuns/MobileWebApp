export const POSITION_DEFAULT = "POSITION_DEFAULT";
export const POSITION_SELECTED = "POSITION_SELECTED";

const initialState = {
    nameSelected: "Bui Duy Khanh",
    position:{
        latitude: 10.802040906830033, 
        latitudeDelta: 0, 
        longitude: 106.6969844401151, 
        longitudeDelta: 0
    },
}

export default function actionForReducer(state = initialState, payload) {
    // console.log('check pl: ', payload);
    switch (payload.type) {
        case POSITION_DEFAULT:
            return {
                ...state,
                position:{
                    latitude:  payload.position.latitude,
                    longitude: payload.position.longitude,
                    latitudeDelta: 0.0421,
                    longitudeDelta: 0.0421,
                },
            }
        case POSITION_SELECTED:
            return {
                ...state,
                nameSelected: payload.item.value
            }

        default:
            return state;
    }
}