import { CLOSE_CREATE_PASTRY_MODAL, OPEN_CREATE_PASTRY_MODAL } from "../types";

const initialModals = {
  isOpenCreatePastryModal: false,
}

function modalsReducer(state=initialModals, {type}){
  switch(type){
    case OPEN_CREATE_PASTRY_MODAL: {
      return {
        ...state,
        isOpenCreatePastryModal: true
      }
    }
    case CLOSE_CREATE_PASTRY_MODAL: {
      return {
        ...state,
        isOpenCreatePastryModal: false
      }
    }
    default: {
      return state;
    }
  }
}

export default modalsReducer;