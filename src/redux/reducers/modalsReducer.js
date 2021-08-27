import { CLOSE_CREATE_PASTRY_MODAL, OPEN_CREATE_PASTRY_MODAL } from "../types";

const initialModals = {
  isOpenCreatePastryModal: false,
  bodyOverflowHidden: false,
}

function modalsReducer(state=initialModals, {type}){
  switch(type){
    case OPEN_CREATE_PASTRY_MODAL: {
      return {
        ...state,
        isOpenCreatePastryModal: true,
        bodyOverflowHidden: true,
      }
    }
    case CLOSE_CREATE_PASTRY_MODAL: {
      return {
        ...state,
        isOpenCreatePastryModal: false,
        bodyOverflowHidden: false,
      }
    }
    default: {
      return state;
    }
  }
}

export default modalsReducer;