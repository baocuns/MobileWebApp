import { createSlice } from "@reduxjs/toolkit";

const mapSlice = createSlice({
    name: "map",
    initialState: {
        map: {
            position: {
                latitude: 10.802040906830033,
                longitude: 106.6969844401151,
                latitudeDelta: 0.0421,
                longitudeDelta: 0.0421
            },
            status: {
                isFetching: false,
                error: false,
                nameSelected: "",//Provine Selected
                msgErr: "",
            }
        }
    },
    reducers: {
        getMapStart: (state) => {
            state.map.status.isFetching = true;
        },
        getMapFailed: (state, action) => {
            state.map.status.isFetching = false;
            state.map.status.error = true;
            state.map.status.msgErr = action.payload
        },
        getMapDefaultSuccess: (state, action) => {
            state.map.status.isFetching = false;
            state.map.status.error = false;
            state.map.position = action.payload;
        },
        getMapSelectedSuccess: (state, action) => {
            state.map.status.isFetching = false;
            state.map.status.error = false;
            state.map.status.nameSelected = action.payload
        }
    }
})

export const {
    getMapStart,
    getMapFailed,
    getMapDefaultSuccess,
    getMapSelectedSuccess
} = mapSlice.actions;

export default mapSlice.reducer;