import { COUNT_TOTAL, GET_COUNT, GET_PASTRY_BY_ID } from "../types";

const initialBasket = {
  basket: [],
  total: 0,
  count: 0,
}

function basketReducer(state=initialBasket, {type, payload}){
  switch(type){
    case GET_PASTRY_BY_ID: {
      return {
        ...state,
        basket: payload
      };
    }
    case COUNT_TOTAL: {
      return {
        ...state,
        total: payload
      };
    }
    case GET_COUNT: {
      return {
        ...state,
        count: payload
      };
    }
    default: {
      return state
    }
  }
}

export default basketReducer;