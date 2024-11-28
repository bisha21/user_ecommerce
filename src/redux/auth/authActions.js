import { createAsyncThunk } from "@reduxjs/toolkit";
import { toast } from "react-toastify";
import { login, register } from "../../api/auth/login";

// Login User Thunk
const loginUser = createAsyncThunk("auth/login", async (data, { rejectWithValue }) => {
  try {
    const response = await login(data);
    localStorage.setItem("authToken",response.data?.authToken);
    console.log(response.data.id);
    return response.data
  } catch (error) {
    // Handle error with optional chaining and fallback messages
    toast.error("Invalid Email or Password");
    console.log(error.response?.data?.message || "An error occurred");
    return rejectWithValue(error.response?.data?.message || "An error occurred");
  }
});

// Register User Thunk
const registerUser = createAsyncThunk("auth/register", async (data, { rejectWithValue }) => {
  try {
    const response = await register(data);
    return response.data; 
  } catch (error) {
    toast.error(error.response?.data?.message || "An error occurred");
    return rejectWithValue(error.response?.data?.message || "An error occurred");
  }
});

export { loginUser, registerUser };
