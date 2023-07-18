import { combineReducers } from 'redux'
import languageReducer from './features/languageSlice';
 

export default combineReducers({
    Languages:languageReducer,
})