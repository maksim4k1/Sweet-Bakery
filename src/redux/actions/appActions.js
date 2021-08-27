import { CLOSE_BASKET, CLOSE_MENU, OPEN_BASKET, OPEN_CREATE_PASTRY_MODAL, CLOSE_CREATE_PASTRY_MODAL, OPEN_MENU } from "../types";

export function openMenuAction() {
  return dispatch => {
    dispatch({ type: OPEN_MENU });
    dispatch(closeBasketAction());
  }
}
export function closeMenuAction() {
  return { type: CLOSE_MENU };
}
export function openBasketAction() {
  return dispatch => {
    dispatch({ type: OPEN_BASKET });
    dispatch(closeMenuAction());
  }
}
export function closeBasketAction() {
  return { type: CLOSE_BASKET };
}
export function openCreatePastryModalAction(){
  return { type: OPEN_CREATE_PASTRY_MODAL };
}
export function closeCreatePastryModalAction(){
  return { type: CLOSE_CREATE_PASTRY_MODAL };
}