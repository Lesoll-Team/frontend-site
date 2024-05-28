import { combineReducers } from "redux";
import globalState from "./features/globalState";
import contactReducer from "./features/contactSlice";
import blogDashboardReducer from "./features/dashboard/blogDashboardSlice";
import overViewReducer from "./features/dashboard/overViewSlice";
import userProfileReducer from "./features/auth/userProfileSlice";
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
import addProjectSlice from "@/components/dashboard/router/add-project/redux/addProjectSlice";
import allProjectsSlice from "@/components/dashboard/router/all-projects/redux/allProjectsSlice";
import editProjectSlice from "@/components/dashboard/router/edit-project/redux/editProjectSlice";
import pendingNeedsSlice from "@/components/dashboard/router/needs/redux/pendingNeedsSlice";
import currenciesSlice from "@/components/newAddProperty/redux/currenciesSlice";
import PricingReducer from "./features/PricingSlice";

export default combineReducers({
  GlobalState: globalState,
  Property: overViewReducer,
  Contact: contactReducer,
  BlogDashboard: blogDashboardReducer,
  OverView: overViewReducer,
  Pricing: PricingReducer,
  userProfile: userProfileReducer,
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
  addProject: addProjectSlice,
  getProjects: allProjectsSlice,
  editProject: editProjectSlice,
  PendingNeeds: pendingNeedsSlice,
  getCurrencies: currenciesSlice,
});
