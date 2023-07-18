
import { configureStore } from '@reduxjs/toolkit';
import rootReducers from './combineReducers'

export const store =configureStore({
  reducer: rootReducers,})