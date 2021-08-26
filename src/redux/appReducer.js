import { combineReducers } from "redux";
import { CLOSE_BASKET, CLOSE_MENU, OPEN_BASKET, OPEN_MENU } from "./types";

const initialNavigation = {
  isOpenMenu: false,
  isOpenBasket: false,
}

function navigationReducer(state=initialNavigation, {type}){
  switch(type){
    case OPEN_MENU: {
      return {
        ...state,
        isOpenMenu: true
      }
    }
    case CLOSE_MENU: {
      return {
        ...state,
        isOpenMenu: false
      }
    }
    case OPEN_BASKET: {
      return {
        ...state,
        isOpenBasket: true
      }
    }
    case CLOSE_BASKET: {
      return {
        ...state,
        isOpenBasket: false
      }
    }
    default: {
      return state;
    }
  }
}

const appReducer = combineReducers({
  navigation: navigationReducer
})

export default appReducer;