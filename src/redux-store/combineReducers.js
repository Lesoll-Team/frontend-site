import { combineReducers } from 'redux'
import globalState from './features/globalState'; 
import userReducer from './features/userSlice';
import loginReducer from './features/loginSlice';
 

export default combineReducers({
    GlobalState:globalState,// edite languages to localState
    User:userReducer,// edite user to signup
    Login:loginReducer, // edite login to signin
})