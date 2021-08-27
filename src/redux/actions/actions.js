import { GET_ALL_PASTRY, ADD_PASTRY_TO_BASKET, COUNT_TOTAL, GET_COUNT, GET_PASTRY_VALUE, EDIT_PASTRY_VALUE, SET_PASTRY_VALUE, DELETE_PASTRY } from "../types";

const URL = "http://localhost:1717/pastry";

export function getAllPastryAction() {
  return async dispatch => {
    const response = await fetch(`${URL}`);
    const data = await response.json();
    dispatch({ type: GET_ALL_PASTRY, payload: data });
  }
}
export function addPastryToBasketAction(id){
  return async dispatch => {
    const response = await fetch(`${URL}/detail/${id}`);
    const data = await response.json();
    const element = {
      id: data.id,
      name: data.name,
      inStock: 1,
      cost: data.cost
    }
    
    dispatch({ type: ADD_PASTRY_TO_BASKET, payload: element });
    dispatch({ type: COUNT_TOTAL });
    dispatch({ type: GET_COUNT, payload: data.cost });

    await fetch(`${URL}/update/${id}`, {
      method: "PUT",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify({
        inStock: data.inStock - 1
      })
    });
    dispatch(getAllPastryAction());
  }
}
export function getPastryValueAction(id, type){
  return async dispatch => {
    const response = await fetch(`${URL}/detail/${id}`);
    const data = await response.json();
    dispatch({ type: GET_PASTRY_VALUE, payload: { value: data[type], type: { id: data.id, type: type } } });
  }
}
export function setPastryValueAction(value){
  return { type: SET_PASTRY_VALUE, payload: value }
}
export function editPastryValueAction(id, type, value){
  return async dispatch => {
    await fetch(`${URL}/update/${id}`, {
      method: "PUT",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify({
        [type]: type === "cost" ? Number(value) : value
      })
    });
    dispatch({ type: EDIT_PASTRY_VALUE });
  }
}
export function deletePastryAction(id){
  return async dispatch => {
    await fetch(`${URL}/delete/${id}`, {
      method: "DELETE"
    });
    dispatch({ type: DELETE_PASTRY });
  }
}