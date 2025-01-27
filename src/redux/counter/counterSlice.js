import { createSlice } from "@reduxjs/toolkit";
const countSlice =
    createSlice({
        name: "counter",
        initialState: {
            count: 0
        },
        reducers: {
            increaseCount(state) {
                state.count = state.count + 1;
            },
            decreaseCount(state) {
                state.count = state.count - 1;
            },
            increseByParamenter(state,actions)
            {
                state.count= state.count+actions.payload;
            }

        }
    })
export default countSlice.reducer;
export const { increaseCount, decreaseCount,increseByParamenter} = countSlice.actions