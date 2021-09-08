import {
  FETCH_PRODUCT_REQUEST,
  FETCH_PRODUCT_SUCCESS,
  FETCH_PRODUCT_FAILURE,
} from "../types/types";

const initialState = {
  loading: true,
  products: {
    next: {},
    results: [],
  },
  error: "",
};

const productReducer = (state = initialState, action) => {
  if (action.type === FETCH_PRODUCT_REQUEST) {
    return {
      ...state,
      loading: true,
    };
  }
  if (action.type === FETCH_PRODUCT_SUCCESS) {
    return {
      loading: false,
      products: action.payload,
      error: "",
    };
  }
  if (action.type === FETCH_PRODUCT_FAILURE) {
    return {
      loading: false,
      products: [],
      error: action.payload,
    };
  }

  return state;
};

export default productReducer;
