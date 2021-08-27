import { EDIT_PASTRY_VALUE, GET_PASTRY_VALUE, SET_PASTRY_VALUE, DELETE_PASTRY } from "../types";

const initialEditPastry = {
  changedValue: "",
  changedInput: {},
}

function editPastryReducer(state=initialEditPastry, {type, payload}){
  switch (type) {
    case GET_PASTRY_VALUE: {
      return {
        ...state,
        changedValue: payload.value,
        changedInput: payload.type,
      }
    }
    case SET_PASTRY_VALUE: {
      return {
        ...state,
        changedValue: payload,
      }
    }
    case EDIT_PASTRY_VALUE: {
      return {
        ...state,
        changedInput: {type: "edit"}
      };;
    }
    case DELETE_PASTRY: {
      return {
        ...state,
        changedInput: {type: "delete"}
      };
    }
    default: {
      return state;
    }
  }
}

export default editPastryReducer;