import { combineReducers } from "redux";
import globalState from "./features/globalState";
import authReducer from "./features/authSlice";
import propertyReducer from "./features/propertySlice";
import addPropertyReducer from "./features/addPropertySlice";

export default combineReducers({
  GlobalState: globalState,
  Auth: authReducer,
  Property: propertyReducer,
  addProperty: addPropertyReducer,
});
