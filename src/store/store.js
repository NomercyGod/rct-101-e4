// TODO: use this store variable to create a store.
import { compose,  combineReducers, legacy_createStore, applyMiddleware } from "redux";
import thunk from "redux-thunk";
import { authReducer } from "./auth/auth.reducer";
import { cartReducer } from "./cart/cart.reducer";
import productReducer from "./product/product.reducer"



const rootreducer = combineReducers({
  Auth: authReducer,
  getdata: productReducer,
  cart: cartReducer,
})

export const store = legacy_createStore(rootreducer, applyMiddleware(thunk))

// NOTE: Do not remove this code,its used for calculating your score, if removed it will give you zero marks
if (window.Cypress) {
  window.store = store;
}
