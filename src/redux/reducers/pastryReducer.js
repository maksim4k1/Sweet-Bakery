import { GET_ALL_PASTRY } from "../types";

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

export default pastryReducer;