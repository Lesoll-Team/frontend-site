import { combineReducers } from 'redux'
import globalState from './features/globalState'; 
import authReducer from './features/authSlice';

 

export default combineReducers({
    GlobalState:globalState,
    Auth:authReducer,

})