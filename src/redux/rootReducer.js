import { combineReducers } from "@reduxjs/toolkit";
import authReducer from "./auth/authSlice";
import counterReducer from "./counter/counterSlice";
import productReducer from "./products/ProductSlice";
import cartReducer from "./Cart/cartsSlice"


export const rootReducer = combineReducers({
  auth: authReducer,
  counter: counterReducer,
  products:productReducer,
  carts:cartReducer,
});
