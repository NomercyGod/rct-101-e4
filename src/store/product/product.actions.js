// Product actions here

import axios from "axios";
import {
  GET_PRODUCTS_ERROR,
  GET_PRODUCTS_LOADING,
  GET_PRODUCTS_SUCCESS,
} from "./product.types";

export const getproduct = () => (dispatch) => {
  dispatch({ type: GET_PRODUCTS_LOADING });
  axios
    .get("http://localhost:8080/products")
    .then((r) => dispatch({ type: GET_PRODUCTS_SUCCESS, payload: r.data }))
    .catch((err) => dispatch({ type: GET_PRODUCTS_ERROR }));
};
