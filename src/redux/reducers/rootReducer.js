import { combineReducers } from "redux";
import appReducer from "./appReducer";
import basketReducer from "./basketReducer";
import editPastryReducer from "./editPastryReducer";
import formReducer from "./formReducer";
import pastryReducer from "./pastryReducer";

const rootReducer = combineReducers({
  pastry: pastryReducer,
  form: formReducer,
  basket: basketReducer,
  editPastry: editPastryReducer,
  app: appReducer
})

export default rootReducer;