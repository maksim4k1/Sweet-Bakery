import { combineReducers } from "redux";
import appReducer from "./appReducer";
import { GET_ALL_PASTRY } from "./types";

function pastryReducer(state=[], {type, payload}){
  switch (type) {
    case GET_ALL_PASTRY: {
      return payload;
    }
    default: {
      return state;
    }
  }
}

const rootReducer = combineReducers({
  pastry: pastryReducer,
  app: appReducer
})

export default rootReducer;