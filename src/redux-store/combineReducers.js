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
import registerReducer from "./features/auth/registerSlice";
import userProfileReducer from "./features/auth/userProfileSlice";
import loginReducer from "./features/auth/loginSlice";
import forgetPasswordReducer from "@/redux-store/features/user/forgetPassSlice";
import addPropertyReducer from "./features/property/addPropertySlice";
import getGovReducer from "./features/location/getGovSlice";
import getRegionReducer from "./features/location/getRegionSlice";
import getFeaturesReducer from "./features/property/getFeaturesSlice";
import editUserDataReducer from "./features/user/editUserDataSlice";
import userPropertiesReducer from "./features/user/userPropertiesSlice";
import userNeedsReducer from "./features/user/userNeedsSlice";
import userSavedItemsReducer from "./features/user/userSavedItemsSlice";
import notifiicationSlice from "./features/user/notifiicationSlice";
import compoundSlice from "./features/property/compoundSlice";
import categoryReducer from "./features/category/categorySlice";
import editPropertySlice from "@/components/edit-property/redux/editPropertSlice";
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
  register: registerReducer,
  login: loginReducer,
  userProfile: userProfileReducer,
  forgetPassword: forgetPasswordReducer,
  addProperty: addPropertyReducer,
  getGov: getGovReducer,
  getRegion: getRegionReducer,
  getFeatures: getFeaturesReducer,
  editUser: editUserDataReducer,
  userProperties: userPropertiesReducer,
  userNeeds: userNeedsReducer,
  userSavedItems: userSavedItemsReducer,
  notifications: notifiicationSlice,
  compounds: compoundSlice,
  Category: categoryReducer,
  editProperty: editPropertySlice,
  // Compare:compareReducer,
});
