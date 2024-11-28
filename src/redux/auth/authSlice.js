import { createSlice } from "@reduxjs/toolkit";
import { loginUser, registerUser } from "./authActions";
const authSlice =
    createSlice({
        name: "auth",
        initialState: {
            user: null,
            loading: false,
            error: null

        },
        reducers: {
            logoutUser(state) {
                state.user = null;
                localStorage.removeItem("authToken");
            }

        },
        extraReducers: (builder) => {
            builder.addCase(loginUser.pending, (state) => {
                state.loading = true;
            }).addCase(loginUser.fulfilled,(state,action)=>{
                state.user= action.payload;
                state.id = action.payload.id; 
                state.loading=false;
                state.error=null;

            }).addCase(loginUser.rejected, (state,action)=>{
                state.loading=false;
                state.error=action.payload;

            }).addCase(registerUser.pending, (state) => {
                state.loading = true;
            }).addCase(registerUser.fulfilled,(state,action)=>{
                state.user= action.payload;
                state.loading=false;
                state.error=null;

            }).addCase(registerUser.rejected, (state,action)=>{
                state.loading=false;
                state.error=action.payload;

            })

        }
    })
export const { logoutUser } = authSlice.actions
export default authSlice.reducer;
