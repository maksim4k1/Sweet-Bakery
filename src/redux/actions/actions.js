import { GET_ALL_PASTRY, ADD_PASTRY_TO_BASKET, COUNT_TOTAL, GET_COUNT, GET_PASTRY_VALUE, EDIT_PASTRY_VALUE, SET_PASTRY_VALUE, DELETE_PASTRY, EDIT_INPUT_VALUE, EDIT_CHECKBOX_VALUE, ADD_NEW_ITEM } from "../types";
import { closeCreatePastryModalAction } from "./appActions";

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
        inStock: data.inStock < 0 ? 0 : data.inStock - 1
      })
    });
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
        [type]: type === "cost" ? Number(value) > 0 ? Number(value) : 0.01 : type === "inStock" ? Number(value) > 0 ? Number(value) : 0 : value
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
export function editInputValueAction(name, value){
  return { type: EDIT_INPUT_VALUE, payload: {name, value} }
}
export function editCheckboxValueAction(name, checked){
  return { type: EDIT_CHECKBOX_VALUE, payload: {name, checked} }
}
export function addNewItemAction(values){
  return async dispatch => {
    let error;

    values = values.filter(item => item !== undefined);
    values.forEach(item => {
      if(item.value !== undefined && item.value === ""){
        error = "Заполните все поля!"
      }
    });

    const data = values.reduce((defaultValue, item) => {
      if(item.name === "house" || item.name === "inStock" || item.name === "cost"){
        defaultValue[item.name] = Number(item.value);
        if(defaultValue[item.name] < 0){
          error = `Значение ${item.name} не может быть ниже нуля`
        }
      } else if(item.name === "ingredients"){
        defaultValue[item.name] = (item.value).split(", ");
      } else{
        defaultValue[item.name] = item.value;
      }
      return defaultValue;
    }, {});

    dispatch({ type: ADD_NEW_ITEM, payload: error });

    if(!error){
      await fetch(`${URL}/create`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json"
        },
        body: JSON.stringify(
          {
            name: data.name,
            image: data.image,
            ingredients: data.ingredients,
            inStock: data.inStock,
            cost: data.cost,
            hasDelivery: data.hasDelivery,
            address: {
              street: data.street,
              houseNumber: data.house
            }
          }
        )
      });
      
      dispatch(closeCreatePastryModalAction());
    }
  }
}