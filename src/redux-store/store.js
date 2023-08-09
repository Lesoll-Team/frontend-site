
import { configureStore } from '@reduxjs/toolkit';
import rootReducers from './combineReducers'
import thunkMiddleware from 'redux-thunk'; // If you are using Redux Thunk middleware


export const store =configureStore({
  reducer: rootReducers,
  middleware: [thunkMiddleware]})