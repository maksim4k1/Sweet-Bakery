import { getAllPastryAction } from "./actions/actions"
import { ADD_NEW_ITEM, ADD_PASTRY_TO_BASKET, DELETE_PASTRY, EDIT_PASTRY_VALUE } from "./types"

export function getPastryMiddleware({dispatch}){
  return next => {
    return async action => {
      if(
        action.type === ADD_PASTRY_TO_BASKET ||
        action.type === EDIT_PASTRY_VALUE ||
        action.type === DELETE_PASTRY ||
        action.type === ADD_NEW_ITEM
      ){
        next(action);
        return dispatch(getAllPastryAction());
      }
      next(action)
    }
  }
}