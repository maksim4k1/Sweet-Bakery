import { combineReducers } from "redux";
import navigationReducer from "./navigationReducer";
import modalsReducer from "./modalsReducer";

const appReducer = combineReducers({
  navigation: navigationReducer,
  modals: modalsReducer,
})

export default appReducer;