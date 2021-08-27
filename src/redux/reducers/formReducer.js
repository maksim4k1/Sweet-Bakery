import { nanoid } from "nanoid";
import { EDIT_INPUT_VALUE, EDIT_CHECKBOX_VALUE, ADD_NEW_ITEM } from "../types";

const initialState = {
  formData: [
    {id: nanoid(), elementType: "input", placeholder: "Name", name: "name", value: ""},
    {id: nanoid(), elementType: "input", placeholder: "Image url", name: "image", value: ""},
    {id: nanoid(), elementType: "input", placeholder: "Ingredients", name: "ingredients", value: ""},
    {id: nanoid(), elementType: "input", placeholder: "In stock", type: "number", name: "inStock", value: ""},
    {id: nanoid(), elementType: "input", placeholder: "Cost", type: "number", name: "cost", value: ""},
    {id: nanoid(), elementType: "checkbox", title: "Has delivery?", name: "hasDelivery", checked: false},
    {id: nanoid(), elementType: "subtitle", title: "Address"},
    {id: nanoid(), elementType: "input", placeholder: "Street", name: "street", value: ""},
    {id: nanoid(), elementType: "input", placeholder: "House number", type: "number", name: "house", value: ""},
  ],
  formError: "",
}

function formReducer(state=initialState, {type, payload}){
  switch (type) {
    case EDIT_INPUT_VALUE: {
      const newFormData = [...state.formData];
      const element = newFormData.find(item => item.name === payload.name);

      if(element){
        element.value = payload.value;
      }

      return {
        ...state,
        formData: newFormData
      };
    }
    case EDIT_CHECKBOX_VALUE: {
      const newFormData = [...state.formData];
      const element = newFormData.find(item => item.name === payload.name);

      if(element){
        element.checked = payload.checked;
      }

      return {
        ...state,
        formData: newFormData
      };
    }
    case ADD_NEW_ITEM: {
      if(!payload){
        const newFormData = state.formData.map(item => {
          return {...item, value: ""}
        });
        return {
          ...state,
          formData: newFormData,
          formError: ""
        };
      }
      return {
        ...state,
        formError: payload
      };
    }
    default: {
      return state;
    }
  }
}

export default formReducer;