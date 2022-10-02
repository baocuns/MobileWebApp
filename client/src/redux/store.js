import { createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import reducer from './reducers';
// Redux-thunk cho phép sử dụng các tác dụng bất đồng bộ
const middleware = [thunk];
export const store = createStore(
    reducer,
    applyMiddleware(...middleware)
)