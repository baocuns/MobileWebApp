import {combineReducers, configureStore} from '@reduxjs/toolkit';
import {applyMiddleware} from 'redux';

import {
  persistStore,
  persistReducer,
  FLUSH,
  REHYDRATE,
  PAUSE,
  PERSIST,
  PURGE,
  REGISTER,
} from 'redux-persist';
import storage from 'redux-persist/lib/storage';
// import AsyncStorage from '@react-native-async-storage/async-storage';
// import AsyncStorage from '@react-native-community/async-storage';
import mapReducer from './mapSlice';

import createWebStorage from 'redux-persist/lib/storage/createWebStorage';

import thunk from 'redux-thunk';

// khiemtv1412 đánh dấu chứ không là không nhớ làm chỗ nào luôn
import authSlice from './authSlice';

const persistConfig = {
  key: 'root',
  storage,
};
// REDUCER
const rootReducer = combineReducers({
  map: mapReducer,
  auth: authSlice,
});

const persistedReducer = persistReducer(persistConfig, rootReducer);

export const store = configureStore({
  reducer: persistedReducer,
  middleware: getDefaultMiddleware =>
    getDefaultMiddleware({
      serializableCheck: {
        ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
      },
    }),
});

export let persistor = persistStore(store);
