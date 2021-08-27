import { combineReducers } from "redux";
import appReducer from "./appReducer";
import basketReducer from "./basketReducer";
import editPastryReducer from "./editPastryReducer";
import pastryReducer from "./pastryReducer";

const rootReducer = combineReducers({
  pastry: pastryReducer,
  basket: basketReducer,
  editPastry: editPastryReducer,
  app: appReducer
})

export default rootReducer;