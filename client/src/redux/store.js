import { createStore, combineReducers, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { persistStore, persistReducer } from 'redux-persist';
import mapReducer from './mapSlice';
import tourSlice from './tourSlice';

// // khiemtv1412 đánh dấu chứ không là không nhớ làm chỗ nào luôn
import authSlice from './authSlice';
import userSlice from './userSilce';
import statusSlice from './statusSlice';

const persistConfig = {
  key: 'root',
  storage: AsyncStorage,
};

// REDUCER
const rootReducer = combineReducers({
  map: mapReducer,
  auth: authSlice,
  user: userSlice,
  tour: tourSlice,
  status: statusSlice,
});

const persistedReducer = persistReducer(persistConfig, rootReducer);
export const store = createStore(persistedReducer, applyMiddleware(thunk));
export const persistor = persistStore(store);
