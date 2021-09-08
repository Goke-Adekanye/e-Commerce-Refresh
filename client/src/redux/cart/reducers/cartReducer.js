import { ADD, DECREASE, INCREASE, REMOVE, CLEAR_CART } from "../types/types";
import {
  handleAddToCart,
  handleRemoveFromCart,
  handleDecreaseFromCart,
} from "../utils/cart.utils";

const initialState = {
  cart: [],
};

export const cartReducer = (state = initialState, action) => {
  if (action.type === DECREASE) {
    return {
      ...state,
      cart: handleDecreaseFromCart({
        prevCartItems: state.cart,
        CartItemToReduce: action.payload,
      }),
    };
  }

  if (action.type === INCREASE) {
    return { ...state, amount: state.amount + 1 };
  }
  if (action.type === ADD) {
    return {
      ...state,
      cart: handleAddToCart({
        prevCartItems: state.cart,
        nextCartItem: action.payload,
      }),
    };
  }
  if (action.type === REMOVE) {
    return {
      ...state,
      cart: handleRemoveFromCart({
        prevCartItems: state.cart,
        CartItemToRemove: action.payload,
      }),
    };
  }
  if (action.type === CLEAR_CART) {
    return {
      ...state,
      ...initialState,
    };
  }
  return state;
};

export default cartReducer;
