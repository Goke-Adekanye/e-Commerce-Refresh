import { CLICKED_TRUE, CLICKED_FALSE } from "../types/types";

const initialState = {
  showCart: {
    state: true,
  },
};

const showCartReducer = (state = initialState, action) => {
  if (action.type === CLICKED_TRUE) {
    return {
      ...state,
      showCart: action.payload,
    };
  }
  if (action.type === CLICKED_FALSE) {
    return {
      ...state,
      showCart: action.payload,
    };
  }
  return state;
};

export default showCartReducer;
