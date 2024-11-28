// cartSlice.js
import { createSlice } from "@reduxjs/toolkit";

const cartSlice = createSlice({
  name: "cart",
  initialState: {
    products: [],
  },
  reducers: {
    addProduct: (state, action) => {
      state.products.push(action.payload);
    },
    deleteProduct: (state, action) => {
      state.products = state.products.filter(
        (product) => product._id !== action.payload
      );
    },
    updateProduct(state, action) {
        const { id, quantity } = action.payload;
        const product = state.products.find((item) => item._id === id);
        if (product && quantity > 0) {
          product.quantity = quantity;
        }
      },
  },
  
});

export const { addProduct, deleteProduct,updateProduct } = cartSlice.actions;
export default cartSlice.reducer;
