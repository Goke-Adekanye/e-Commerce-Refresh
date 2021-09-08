import axios from "axios";
import {
  FETCH_PRODUCT_REQUEST,
  FETCH_PRODUCT_SUCCESS,
  FETCH_PRODUCT_FAILURE,
} from "../types/types";

export const fetchProductRequest = () => {
  return {
    type: FETCH_PRODUCT_REQUEST,
    payload: [],
  };
};

export const fetchProductSuccess = (products) => {
  return {
    type: FETCH_PRODUCT_SUCCESS,
    payload: products,
  };
};
export const fetchProductFailure = (error) => {
  return {
    type: FETCH_PRODUCT_FAILURE,
    payload: error,
  };
};

export const fetchProducts = ({ style, filter, page }) => {
  return (dispatch) => {
    dispatch(fetchProductRequest);
    axios
      .get(`https://e-commerce-frugal.herokuapp.com/${style}/${filter}`, {
        params: {
          page: page,
          limit: 4,
        },
      })
      .then((response) => {
        const products = response.data;
        dispatch(fetchProductSuccess(products));
      })
      .catch((error) => {
        const errorMsg = error.message;
        dispatch(fetchProductFailure(errorMsg));
      });
  };
};
