import { combineReducers } from 'redux'
import globalState from './features/globalState'; 
import authReducer from './features/authSlice';
import propertyReducer from './features/propertySlice';
import contactReducer from './features/contactSlice';
import searchReducer from './features/searchSlice';
import blogDashboardReducer from './features/dashboard/blogDashboardSlice';

 

export default combineReducers({
    GlobalState:globalState,
    Auth:authReducer,
    Property:propertyReducer,
    Contact:contactReducer,
    BlogDashboard:blogDashboardReducer,
    Search:searchReducer,
})
