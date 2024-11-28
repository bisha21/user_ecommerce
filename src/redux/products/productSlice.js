import { createSlice } from "@reduxjs/toolkit";
import { getAllCategory, getAllProducts } from "./ProductsActions"

const productSlice = createSlice({
    name: "product",
    initialState: {
        loading: false,
        products: [],
        error: null,
        query: {},
        categories:[]

    },
    reducers: {
        setQuery: (state, action) => {
            state.query.limit = action.payload
            console.log(state.query)
        },
        setSort: (state, action) => {
            state.query.sort = action.payload
            // console.log(state.query.sort);
        },
        setFilter: (state, action) => {
            state.query.filters = { ...state.query.filters, ...action.payload }
        },
        resetQuery:(state)=>{
            state.query={};
        }

    },
    extraReducers: (builder) => {
        builder.addCase(getAllProducts.pending, (state) => {
            state.loading = true;
        }).addCase(getAllProducts.fulfilled, (state, action) => {
            state.products = action.payload;
            state.loading = false;
        }).addCase(getAllProducts.rejected, (state, action) => {
            state.error = action.payload;
            state.loading = false
        })
        .addCase(getAllCategory.pending, (state) => {
            state.loading = true;
        }).addCase(getAllCategory.fulfilled, (state, action) => {
            state.categories = action.payload;
            state.loading = false;
        }).addCase(getAllCategory.rejected, (state, action) => {
            state.error = action.payload;
            state.loading = false
        })

    }
})
export const { setQuery, setSort, setFilter,resetQuery} = productSlice.actions
export default productSlice.reducer;