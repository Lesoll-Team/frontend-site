import { combineReducers } from 'redux'
import languageReducer from './features/languageSlice';
import userReducer from './features/userSlice';
 

export default combineReducers({
    Languages:languageReducer,
    User:userReducer,
})