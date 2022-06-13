import {
  AUTH_SIGN_IN_ERROR,
  AUTH_SIGN_IN_LOADING,
  AUTH_SIGN_IN_SUCCESS,
  AUTH_SIGN_OUT,
} from "./auth.types";

// Note: Do not update/change the initial state
export const authInitalState = {
  loading: false,
  data: {
    token: "",
    isAuthenticated: false,
  },
  error: false,
};

export const authReducer = (state = authInitalState, { type, payload }) => {
  switch (type) {
    // sign parts starts here
    case AUTH_SIGN_IN_LOADING: {
      return { ...state, loading: true, error: false };
    }
    case AUTH_SIGN_IN_SUCCESS: {
      return {
        ...state,
        loading: false,
        error: false,
        data: { ...state.data, token: payload.token, isAuthenticated: true },
      };
    }
    case AUTH_SIGN_IN_ERROR: {
      return { ...state, error: true, loading: false };
    }
    // sign parts ends here

    // signout parts starts here
    case AUTH_SIGN_OUT: {
      return {
        ...state,
        loading: false,
        error: false,
        data: { ...state.data, token: "", isAuthenticated: false },
      };
    }

    // signout parts ends here

    default: {
      return state;
    }
  }
};
