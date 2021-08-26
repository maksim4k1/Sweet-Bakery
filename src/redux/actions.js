import { CLOSE_BASKET, CLOSE_MENU, GET_ALL_PASTRY, OPEN_BASKET, OPEN_MENU } from "./types";

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
export function getAllPastryAction() {
  return async dispatch => {
    const response = await fetch("http://localhost:1717/pastry");
    const data = await response.json();
    dispatch({ type: GET_ALL_PASTRY, payload: data });
  }
}