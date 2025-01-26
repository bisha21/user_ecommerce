import { createAsyncThunk } from "@reduxjs/toolkit";
import { getCategories, getProducts } from "../../api/products";

const getAllProducts = createAsyncThunk(
  "products/all",
  async ({ limit = 10, sort = JSON.stringify({ createdAt: -1 }), filters = {} }, { rejectWithValue }) => {
    try {
      const response = await getProducts({ limit, sort, filters });
      console.log("Thunk Parameters:", { limit, sort, filters }); // Log input
      return response.data;
    } catch (error) {
      return rejectWithValue(error.response?.data);
    }
  }
);


const getAllCategory = createAsyncThunk(
  "products/categories",
  async (_, { rejectWithValue }) => {
    try {
      const response = await getCategories();

      return response.data;
    } catch (error) {
      return rejectWithValue(error.response?.data);
    }
  }
);


export { getAllProducts, getAllCategory };
