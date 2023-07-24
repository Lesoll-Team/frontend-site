import { combineReducers } from 'redux'
import globalState from './features/globalState'; 
import signUpReducer from './features/signUpSlice';
import signInReducer from './features/signinSlice';
 

export default combineReducers({
    GlobalState:globalState,
    SignUp:signUpReducer,
    SignIn:signInReducer, 
})