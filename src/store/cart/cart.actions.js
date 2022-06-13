// Cart Actions here
import axios from "axios";
import {
  GET_CART_ITEMS_LOADING,
  GET_CART_ITEMS_SUCCESS,
  GET_CART_ITEMS_ERROR,
  ADD_ITEM_TO_CART_LOADING,
  ADD_ITEM_TO_CART_SUCCESS,
  ADD_ITEM_TO_CART_ERROR,
  UPDATE_CART_ITEMS_LOADING,
  UPDATE_CART_ITEMS_SUCCESS,
  UPDATE_CART_ITEMS_ERROR,
  REMOVE_CART_ITEMS_LOADING,
  REMOVE_CART_ITEMS_SUCCESS,
  REMOVE_CART_ITEMS_ERROR,
} from "./cart.types";



export const getCartItems = () => (disptach) => {
    disptach({ type: GET_CART_ITEMS_LOADING });
    return axios
      .get("http://localhost:8080/cartItems")
      .then((res) => {
        console.log(res.data);
        return disptach({ type: GET_CART_ITEMS_SUCCESS, payload: res.data });
      })
      .catch(() => disptach({ type: GET_CART_ITEMS_ERROR }));
  };
  
  export const addItemToCart = (cartInfo) => (dispatch) => {
    dispatch({ type: ADD_ITEM_TO_CART_LOADING });
    return axios
      .post("http://localhost:8080/cartItems", { ...cartInfo })
      .then(({ data }) => {
        dispatch({ type: ADD_ITEM_TO_CART_SUCCESS, payload: data });
      })
      .catch(() => dispatch({ type: ADD_ITEM_TO_CART_ERROR }));
  };
  
  export const removeItemFromCart = (cartId) => (dispatch) => {
    dispatch({ type: REMOVE_CART_ITEMS_LOADING });
    return axios
      .delete(`http://localhost:8080/cartItems/${cartId}`)
      .then((r) => {
        dispatch({ type: REMOVE_CART_ITEMS_SUCCESS, payload: { id: cartId } });
      })
      .catch(() => dispatch({ type: REMOVE_CART_ITEMS_ERROR }));
  };
  
  export const updateCartItem = (cartId, update) => (dispatch) => {
    dispatch({ type: UPDATE_CART_ITEMS_LOADING });
    return axios
      .patch(`http://localhost:8080/cartItems/${cartId}`, {
        ...update,
      })
      .then(({ data }) => {
        dispatch({ type: UPDATE_CART_ITEMS_SUCCESS, payload: data });
      })
      .catch(() => dispatch({ type: UPDATE_CART_ITEMS_ERROR }));
  };
  