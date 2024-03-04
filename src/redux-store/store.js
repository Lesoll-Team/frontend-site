
import { configureStore } from '@reduxjs/toolkit';
import rootReducers from './combineReducers'
// import { configureStore } from '@reduxjs/toolkit';
// import rootReducer from './reducers'; // Import the root reducer which combines all your individual reducers (slices)
import thunkMiddleware from 'redux-thunk'; // If you are using Redux Thunk middleware
// import loggerMiddleware from 'redux-logger';

export const store =configureStore({
  reducer: rootReducers,
  middleware: [thunkMiddleware],})//, loggerMiddleware
