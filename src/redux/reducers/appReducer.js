import { combineReducers } from "redux";
import navigationReducer from "./navigationReducer";

const appReducer = combineReducers({
  navigation: navigationReducer
})

export default appReducer;