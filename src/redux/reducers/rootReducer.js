import { combineReducers } from "redux";
import appReducer from "./appReducer";
import basketReducer from "./basketReducer";
import editPastryReducer from "./editPastryReducer";
import formReducer from "./formReducer";
import pastryReducer from "./pastryReducer";

const rootReducer = combineReducers({
  form: formReducer,
  pastry: pastryReducer,
  basket: basketReducer,
  editPastry: editPastryReducer,
  app: appReducer
})

export default rootReducer;