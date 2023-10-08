import { combineReducers } from 'redux'
import globalState from './features/globalState'; 
import authReducer from './features/authSlice';
import propertyReducer from './features/propertySlice';
import contactReducer from './features/contactSlice';
// import compareReducer from './features/compareSlice';
import searchReducer from './features/searchSlice';
import searchingReducer from './features/searchingSlice';
import profileReducer from './features/profileSlice';
import blogDashboardReducer from './features/dashboard/blogDashboardSlice';

 

export default combineReducers({
    GlobalState:globalState,
    Auth:authReducer,
    Property:propertyReducer,
    Contact:contactReducer,
    BlogDashboard:blogDashboardReducer,
    Search:searchReducer,
    Searching:searchingReducer,
    Profile:profileReducer,
    // Compare:compareReducer,
})
