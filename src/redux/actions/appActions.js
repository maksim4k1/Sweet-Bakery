import { CLOSE_BASKET, CLOSE_MENU, OPEN_BASKET, OPEN_MENU } from "../types";

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