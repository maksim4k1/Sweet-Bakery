import { combineReducers } from "redux";
import appReducer from "./appReducer";
import basketReducer from "./basketReducer";
import pastryReducer from "./pastryReducer";

const rootReducer = combineReducers({
  pastry: pastryReducer,
  basket: basketReducer,
  app: appReducer
})

export default rootReducer;