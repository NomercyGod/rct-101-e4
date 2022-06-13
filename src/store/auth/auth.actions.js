// Auth Actions here

import axios from "axios";
import {
  AUTH_SIGN_IN_ERROR,
  AUTH_SIGN_IN_LOADING,
  AUTH_SIGN_IN_SUCCESS,
  AUTH_SIGN_OUT,
} from "./auth.types";

export const loginuser = (payload) => (dispatch) => {
  //something left behind
//   console.log(payload);

  dispatch({ type: AUTH_SIGN_IN_LOADING });

  axios
    .post("https://reqres.in/api/login", {
      email: payload.email,
      password: payload.pass,
    })
    .then((r) => dispatch({ type: AUTH_SIGN_IN_SUCCESS, payload: r.data }))
    .catch((err) => dispatch({ type: AUTH_SIGN_IN_ERROR }));
};

export const logoutuser = () => (dispatch) => {
  dispatch({ type: AUTH_SIGN_OUT });
};
