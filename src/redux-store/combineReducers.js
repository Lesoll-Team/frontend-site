import { combineReducers } from "redux";
import globalState from "./features/globalState";
import authReducer from "./features/authSlice";
// import propertyReducer from './features/propertySlice';
import contactReducer from "./features/contactSlice";
// import compareReducer from './features/compareSlice';
// import overViewReducer from "./features/dashboard/overViewSlice";
// overViewSlice
import searchingReducer from "./features/searchingSlice";
import profileReducer from "./features/profileSlice";
import blogDashboardReducer from "./features/dashboard/blogDashboardSlice";
import overViewReducer from "./features/dashboard/overViewSlice";
import needsReducer from "./features/needsSlice";
import needPostReducer from "./features/needsFeedSlice";
import faqReducer from "./features/faqSlice";
export default combineReducers({
  GlobalState: globalState,
  Auth: authReducer,
  Property: overViewReducer,
  Contact: contactReducer,
  BlogDashboard: blogDashboardReducer,
  OverView: overViewReducer,
  Searching: searchingReducer,
  Profile: profileReducer,
  needs: needsReducer,
  needsPosts: needPostReducer,
  faq: faqReducer,
  // Compare:compareReducer,
});
