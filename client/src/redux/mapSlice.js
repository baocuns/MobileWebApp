import {createSlice} from '@reduxjs/toolkit';

const mapSlice = createSlice({
  name: 'map',
  initialState: {
    map: {
      positionFault: {
        latitude: 10.802040906830033,
        longitude: 106.6969844401151,
        latitudeDelta: 0.0421,
        longitudeDelta: 0.0421,
      },
      position: {
        latitude: 10.802040906830033,
        longitude: 106.6969844401151,
        latitudeDelta: 0.0421,
        longitudeDelta: 0.0421,
      },
      status: {
        isFetching: false,
        error: false,
        nameSelected: 'default', //Provine Selected
        msgErr: '',
      },
      infoMarker: {
        isFetching: false,
        msg: '',
        info: null,
      },
    },
  },
  reducers: {
    setPositionDefault: (state, action) => {
      state.map.positionFault = action.payload;
    },
    getMapStart: state => {
      state.map.status.isFetching = true;
    },
    getMapFailed: (state, action) => {
      state.map.status.isFetching = false;
      state.map.status.error = true;
      state.map.status.msgErr = action.payload;
    },
    getMapDefaultSuccess: (state, action) => {
      state.map.status.isFetching = false;
      state.map.status.error = false;
      state.map.position = action.payload;
    },
    getMapSelectedSuccess: (state, action) => {
      state.map.status.isFetching = false;
      state.map.status.error = false;
      state.map.status.nameSelected = action.payload;
    },
    getInfoStart: state => {
      state.map.isFetching = true;
    },
    getInfoSuccess: (state, action) => {
      state.map.infoMarker.isFetching = false;
      state.map.infoMarker.info = action.payload;
      state.map.infoMarker.msg = '';
    },
    getInfoFailed: (state, action) => {
      state.map.infoMarker.isFetching = false;
      state.map.infoMarker.msg = action.payload;
    },
  },
});

export const {
  setPositionDefault,
  getMapStart,
  getMapFailed,
  getMapDefaultSuccess,
  getMapSelectedSuccess,
  getInfoStart,
  getInfoSuccess,
  getInfoFailed,
} = mapSlice.actions;

export default mapSlice.reducer;
