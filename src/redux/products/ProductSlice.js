import { createSlice } from "@reduxjs/toolkit";
import { getAllCategory, getAllProducts } from "./ProductsActions"

const productSlice = createSlice({
    name: "product",
    initialState: {
        loading: false,
        products: [],
        error: null,
        query: {
            limit: 10, // Default limit
            sort: JSON.stringify({ createdAt: -1 }), // Default sorting
            filters: {}, // Default filters
        },
        categories: []

    },
    reducers: {
        setQuery: (state, action) => {
            state.query = { ...state.query, ...action.payload };
            console.log("Updated query:", state.query); // Debugging log
        },
        setFilter: (state, action) => {
            state.query.filters = { ...state.query.filters, ...action.payload };
            console.log("Updated filters:", state.query.filters); // Debugging log
        },
        setSort: (state, action) => {
            state.query.sort = action.payload;
            console.log("Updated sort:", state.query.sort); // Debugging log
        },
        resetQuery: (state) => {
            state.query = {
                limit: 10, // Default limit
                sort: JSON.stringify({ createdAt: -1 }), // Default sorting
                filters: {}, // Default filters
            };
        },

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
export const { setQuery, setSort, setFilter, resetQuery } = productSlice.actions
export default productSlice.reducer;