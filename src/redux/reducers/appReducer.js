import { combineReducers } from "redux";
import navigationReducer from "./navigationReducer";
import modalsReducer from "./modalsReducer";
import loaderReducer from "./loaderReducer";

const appReducer = combineReducers({
  navigation: navigationReducer,
  modals: modalsReducer,
  loader: loaderReducer,
})

export default appReducer;