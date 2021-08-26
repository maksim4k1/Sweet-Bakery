import { ADD_PASTRY_TO_BASKET, COUNT_TOTAL, GET_COUNT } from "../types";

const initialBasket = {
  basket: [],
  total: 0,
  count: 0,
}

function basketReducer(state=initialBasket, {type, payload}){
  switch(type){
    case ADD_PASTRY_TO_BASKET: {
      const newBasket = [...state.basket];
      const element = newBasket.find(item => item.id === payload.id);

      if(element){
        element.inStock += 1;
        element.cost = Math.round((payload.cost * element.inStock) * 100) / 100;
      } else{
        newBasket.push(payload);
      }

      return {
        ...state,
        basket: newBasket
      };
    }
    case COUNT_TOTAL: {
      const basket = [...state.basket];
      let total = 0;
      basket.forEach(item => {
        total += item.cost;
      });
      total = Math.round(total * 100) / 100;
      
      return {
        ...state,
        total: total
      };
    }
    case GET_COUNT: {
      const basket = [...state.basket];
      let count = 0;
      basket.forEach(item => {
        count += item.inStock;
      });

      return {
        ...state,
        count: count
      };
    }
    default: {
      return state
    }
  }
}

export default basketReducer;