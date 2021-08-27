import { HIDE_LOADER, SHOW_LOADER } from "../types";

function loaderReducer(state=false, {type}){
  switch(type){
    case SHOW_LOADER: {
      return true;
    }
    case HIDE_LOADER: {
      return false;
    }
    default: {
      return state;
    }
  }
}

export default loaderReducer;